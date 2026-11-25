import React, { useState, useRef } from "react";

function EmployeeInvoice() {

    const [bill, setBill] = useState(null);

    const eno = useRef();
    const ename = useRef();
    const salary = useRef();

    const printInvoice = () => {

        let id = eno.current.value;
        let name = ename.current.value;
        let sal = Number(salary.current.value);

        if (
            id === "" ||
            name.trim() === "" ||
            salary.current.value === ""
        ) {
            alert("Please enter all details");
            return;
        }

        if (sal < 0) {
            alert("Salary cannot be negative");
            return;
        }

        let ta, da, hra, pf;

        if (sal < 30000) {
            ta = sal * 7 / 100;
            da = sal * 9 / 100;
            hra = sal * 11 / 100;
            pf = sal * 15 / 100;
        }
        else if (sal >= 30000 && sal < 50000) {
            ta = sal * 12 / 100;
            da = sal * 13 / 100;
            hra = sal * 17 / 100;
            pf = sal * 22 / 100;
        }
        else {
            ta = sal * 17 / 100;
            da = sal * 19 / 100;
            hra = sal * 21 / 100;
            pf = sal * 25 / 100;
        }

        let gross = sal + ta + da + hra;
        let net = gross - pf;

        setBill({
            id: id,
            name: name,
            salary: sal,
            ta: ta,
            da: da,
            hra: hra,
            pf: pf,
            gross: gross,
            net: net
        });
    };

    return (
        <>
           
            <hr />

            <div style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "flex-start",
                gap: "20px",
                padding: "20px",
                border: "3px solid black",
                borderRadius: "15px"
            }}>

                {/* Input Form */}

                <div style={{
                    border: "3px solid black",
                    borderRadius: "15px",
                    padding: "25px",
                    width: "40%"
                }}>

                    <h2>Employee Invoice Application</h2>

                    <p>
                        Employee No:
                        <input type="number" ref={eno} />
                    </p>

                    <p>
                        Employee Name:
                        <input type="text" ref={ename} />
                    </p>

                    <p>
                        Employee Salary:
                        <input type="number" ref={salary} />
                    </p>

                    <button onClick={printInvoice}>
                        PrintInvoice
                    </button>

                </div>

                {/* Output Section */}

                <div style={{
                    width: "50%",
                    padding: "10px"
                }}>

                    {bill && (
                        <>
                            <p>Employee No: {bill.id}</p>

                            <p>Employee Name: {bill.name}</p>

                            <p>Employee Salary: {bill.salary.toFixed(2)}</p>

                            <p>TA: {bill.ta.toFixed(2)}</p>

                            <p>DA: {bill.da.toFixed(2)}</p>

                            <p>HRA: {bill.hra.toFixed(2)}</p>

                            <p>PF: {bill.pf.toFixed(2)}</p>

                            <p>Gross Salary: {bill.gross.toFixed(2)}</p>

                            <h3>
                                Net Salary: {bill.net.toFixed(2)}
                            </h3>
                        </>
                    )}

                </div>

            </div>
        </>
    );
}

export default EmployeeInvoice;