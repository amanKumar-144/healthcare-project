const Decentralized = artifacts.require("./Decentralized.sol");

contract('Decentralized',([deployer,a_patient1,a_patient2,a_doctor1,a_doctor2])=>{
    let decentralized;
    let patientCount,nomineeCount,doctorCount;
    let patient1,patient2;
    let doctor1,doctor2;
    let accounts;
    before(async() =>{
        decentralized = await Decentralized.deployed({from:deployer});
    })
    describe('deployment',async() =>{
        it('Deploys successfully',async()=>{
            const address = await decentralized.owner();
            assert.notEqual(address,0x0);
            assert.notEqual(address,'');
            assert.notEqual(address,null);
            assert.notEqual(address,undefined);
            assert.equal(address,deployer);

        })
        it('has a name',async() =>{
            const name = await decentralized.name();
            assert.equal(name,"Consent Management System");
        })
    })

    describe('Initial',async()=>{
        it('Initial Count',async() =>{
            patientCount = await decentralized.patientCount();
            doctorCount = await decentralized.doctorCount();
            nomineeCount = await decentralized.nomineeCount();

            assert.equal(patientCount, 0);
            assert.equal(doctorCount, 0);
            assert.equal(nomineeCount, 0);
        })
    })

    describe("Create Patient,Admin",async() =>{

        before(async() => {
            patient1 = await decentralized.createPatient("123",{from:a_patient1});
            patient2 = await decentralized.createPatient("456",{from:a_patient2});
            accounts = await web3.eth.getAccounts();
            doctor1 = await decentralized.createDoctor("1234",{from:a_doctor1});
            doctor2 = await decentralized.createDoctor("5678",{from:a_doctor2});
            
            doctorCount = await decentralized.doctorCount();
            nomineeCount = await decentralized.nomineeCount();
            patientCount = await decentralized.patientCount();
        })

        it('Check Details1',async() => {
            assert.equal(doctorCount, 2);
            assert.equal(nomineeCount, 0);
            assert.equal(patientCount, 2);
            console.log(patient1.logs[0].args);
            console.log(patient2.logs[0].args);
            console.log(doctor1.logs[0].args);
            console.log(doctor2.logs[0].args);
            
        })
    })

    describe("Create Nominee",async() => {
        let result;
        before(async() => {
            result = await decentralized.createNominee(patient1.logs[0].args.patientId,patient2.logs[0].args.patientId);
        })
        it("Check Nominee results",async()=>{
            console.log(patient1.logs[0].args);
            console.log(result.logs[0].args);
        })
    })

})
