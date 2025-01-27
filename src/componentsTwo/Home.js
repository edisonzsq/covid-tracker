import React from 'react';
import { useState, useEffect } from 'react';
import API from '../screens/API'

function Overview() {
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [data4, setData4] = useState([]);

    const getAsyncData1 = async () => {
        const resp = await API.get("/api/action/datastore_search?resource_id=6c14814b-09b7-408e-80c4-db3d393c7c15");
        if (resp.status === 200) {
          console.log(resp);
          setData1(resp.data.result.records[0]);
        }
      }
        useEffect(() =>{
          getAsyncData1();
        }, []);

    const getAsyncData3 = async () => {
        const resp = await API.get("/api/action/datastore_search?resource_id=783f0c4c-caf7-4818-8683-760f3d7f0757");
        if (resp.status === 200) {
          console.log(resp.data.result.records[0]);
          setData3(resp.data.result.records[0]);
        }
      }
        useEffect(() =>{
          getAsyncData3();
        }, []);

    const getAsyncData4 = async () => {
        const resp = await API.get("/api/action/datastore_search?resource_id=b5ae6ad5-1272-41f4-a4e5-23308ad6e32d");
        if (resp.status === 200) {
            console.log(resp);
            setData4(resp.data.result.records[0]);
        }
    }
        useEffect(() =>{
            getAsyncData4();
        }, []);  

    const getAsyncData2 = async () => {
        const resp = await API.get("/api/action/datastore_search?resource_id=9ec89dc0-cb6b-4604-aaff-382d5e850206");
        if (resp.status === 200) {
            console.log(resp);
            setData2(resp.data.result.records[0]);
        }
    }
        useEffect(() =>{
            getAsyncData2();
        }, []);

            return (
              <table>
                  <tbody>
              <h3>Active Cases Overview</h3>
              <tr>
                <th>Count of Case</th>
                <th>Age Group</th>
                <th>As of Date</th>
              </tr>
              <tr key={data1._id}>
                    <td>{data1.count_of_case}</td>
                    <td>{data1.age_group}</td>
                    <td>{data1.pr_date}</td>
                    </tr>
                </tbody>
                <tbody>
              <h3>Deceased Overview</h3>
              <tr>
                <th>Count of Case</th>
                <th>Vaccination Status</th>
                <th>As of Date</th>
                <th>Clinical Status</th>
              </tr>
                    <tr key={data3._id}>
                      <td>{data3.count_of_case}</td>
                      <td>{data3.vaccination_status}</td>
                      <td>{data3.as_of_date}</td>
                      <td>{data3.clinicalstatus}</td>
                    </tr>
                </tbody>
                <tbody>
              <h3>Recovered Overview</h3>
              <tr>
                <th>Status</th>
                <th>As of Date</th>
                <th>Value</th>
              </tr>
              <tr key={data4._id}>
                    <td>{data4.status}</td>
                    <td>{data4.as_of_date}</td>
                    <td>{data4.value}</td>
                    </tr>
                </tbody>
                <tbody>
              <h3>Discharged Overview</h3>
              <tr>
                <th>completed full regimen</th>
                <th>Age Group</th>
                <th>Unvaccinated</th>
                <th>At least one dose</th>
              </tr>
              <tr key={data2._id}>
                    <td>{data2.completed_full_regimen}</td>
                    <td>{data2.age}</td>
                    <td>{data2.unvaccinated}</td>
                    <td>{data2.at_least_one_dose}</td>
                    </tr>
                </tbody>
              </table>
            )
          
}

export default Overview