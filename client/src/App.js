import React,{useState,useEffect} from 'react'
import "./App.css"
import {Routes,Route} from 'react-router-dom'
import Home from './routes/Home'
import Patient from './routes/Patient'
import Doctor from './routes/Doctor'
import PatientDashboard from './routes/PatientDashboard'
import DoctorDashboard from './routes/DoctorDashboard'
import Decentralized from "./contracts/Decentralized.json";
import getWeb3 from "./getWeb3";

const App = () => {
    const [contract,setContract] = useState(null);
    const [account,setAccount] = useState();

    const [name,setName] = useState(null);
    const [owner,setOwner] = useState(null);
    const [patientCount,setPatientCount] = useState(null);
    const [doctorCount,setDoctorCount] = useState(null);
    const [nomineeCount,setNomineeCount] = useState(null);

    const [patientMap,setPatientMap] = useState([]);
    const [doctorMap,setDoctorMap] = useState([]);

    const [patientToDoc,setPatientToDoc] = useState([]);
    const [nomineeToPatient,setNomineeToPatient] = useState([]);
    //Metamask account

    const loadContractData = async(contract)=>{
        console.log(contract);
        const name = await contract.methods.name().call();
        console.log(name);setName(name);
        const owner = await contract.methods.owner().call();
        console.log(owner);setOwner(owner);
        const patientCount = await contract.methods.patientCount().call();
        console.log(patientCount);setPatientCount(patientCount);
        const doctorCount = await contract.methods.doctorCount().call();
        console.log(doctorCount);setDoctorCount(doctorCount);
        const nomineeCount = await contract.methods.nomineeCount().call();
        console.log(nomineeCount);setNomineeCount(nomineeCount);

        const patientMap=[];
        for(var i=1;i<=patientCount;i++){
            const p1=await contract.methods.patientMap(i).call();
            patientMap.push(p1);
        }setPatientMap(patientMap);
        console.log(patientMap);

        const doctorMap=[];
        for(var i=1;i<=doctorCount;i++){
            const d1=await contract.methods.doctorMap(i).call();
            doctorMap.push(d1);
        }setDoctorMap(doctorMap);
        console.log(doctorMap);

        const patientToDoc=[];
        for(var i=1;i<=patientCount;i++)
        {
            const a=[];
            for(var j=1;j<=doctorCount;j++)
            {
              const obj1=await contract.methods.patientToDoc(i,j).call();
              a.push(obj1);
            }
            patientToDoc.push(a);
        }setPatientToDoc(patientToDoc);
        console.log("Here",patientToDoc);

        const nomineeToPatient=[];
        for(var i=1;i<=patientCount;i++)
        {
          const a=[];
          for(var j=1;j<=patientCount;j++)
          {
            const obj1=await contract.methods.nomineeToPatient(i,j).call();
            a.push(obj1);
          }
          nomineeToPatient.push(a);
        }setNomineeToPatient(nomineeToPatient);
        console.log("Here2",nomineeToPatient);

        
    }

    const loadWeb3Account =async(web3) => {
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);
        if(accounts){
          console.log("The Account is ",accounts[0]);
          setAccount(accounts[0]);
        }
    }

    const loadWeb3Contract = async(web3) =>{
        const networkId = await web3.eth.net.getId();
        const networkData = Decentralized.networks[networkId];
        console.log(networkData);
      
        if(networkData) {
          const abi = Decentralized.abi;
          const address = networkData.address;
          const contract = new web3.eth.Contract(abi,address);
          setContract(contract);
          return contract;
        }
    }
    
    useEffect(async()=>{
        const web3 = await getWeb3();
        await loadWeb3Account(web3);
        let contract = await loadWeb3Contract(web3);
        await loadContractData(contract);
    },[]);

    //Functions
    const createPatient=(password)=>{
      contract.methods.createPatient(password).send({from:account});
    }
    const createNominee=(patientId,nomineeId)=>{
      contract.methods.createNominee(patientId,nomineeId).send({from:account});
    }
    const removeNominee=(patientId,nomineeId)=>{
      contract.methods.removeNominee(patientId,nomineeId).send({from:account});
    }
    const createDoctor=(password)=>{
      contract.methods.createDoctor(password).send({from:account});
    }
    const createConsent=(patientId,doctorId)=>{
      contract.methods.createConsent(patientId,doctorId).send({from:account});
    }
    const revokeConsent=(patientId,doctorId)=>{
      contract.methods.revokeConsent(patientId,doctorId).send({from:account});
    }
    const requestConsent=(patientId,doctorId)=>{
      contract.methods.requestConsent(patientId,doctorId).send({from:account});
    }

    return (
      <div>
        <h3>{owner}</h3>
        
        <Routes>


          <Route path="/testPatient" element={<PatientDashboard 
          />}/>

          <Route path="/testDoctor" element={<DoctorDashboard 
          />}/>

          <Route path='/' element={<Home 
            name={name} 
            account={account} 
            owner={owner} 
            createPatient={createPatient} 
            createDoctor={createDoctor}
          />} />

          <Route path='/patient' element={<Patient 
            patientCount={patientCount}
            doctorCount={doctorCount}
            nomineeCount={nomineeCount}
            account={account} 

            patientMap={patientMap}
            doctorMap={doctorMap}
            patientToDoc={patientToDoc}
            nomineeToPatient={nomineeToPatient}

            createNominee={createNominee} 
            removeNominee={removeNominee} 
            createConsent={createConsent} 
            revokeConsent={revokeConsent}
          />} />

          <Route path='/doctor' element={<Doctor 
            patientCount={patientCount}
            doctorCount={doctorCount}
            nomineeCount={nomineeCount}
            account={account} 

            patientMap={patientMap}
            doctorMap={doctorMap}
            patientToDoc={patientToDoc}
            nomineeToPatient={nomineeToPatient}

            requestConsent={requestConsent}
          />} />

        </Routes>
      </div>
    )
}

export default App