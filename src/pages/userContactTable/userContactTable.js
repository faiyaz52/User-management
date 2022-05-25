import React, { useState } from "react";
import "../../style/user.scss"
import Contact from "./contact";
const UserTable = ({ user, setuserList }) => {
    const [data, setData] = useState([]);
    const [selectAll, setSelectAll] = React.useState(false);
    const [select, setSelect] = React.useState(false);
    const [isLoadinding, setIsLoadinding] = useState(false);

    function handleRemove(id) {
        const newList = user.filter((item) => item?.login?.uuid !== id);
        setuserList(newList);
    }
    const removeAll = () => {
        if (window.confirm("Are you want to delete all records")) {
            setuserList([])
        }
        setSelectAll(false)
        setIsLoadinding(true)
    }
    return (
        <div className=" user-table-card">
            <div style={{ float: "left", margin: "12px 21px 11px 42px", color: "#3e45cf", fontWeight: "800" }}>Contacts ({user.length})</div>
            {selectAll ? <span onClick={removeAll} className="glyphicon glyphicon-trash" style={{ float: "left", margin: "13px 8px 5px 1px", color: "#3e45cf" }}></span> : null}
            <table className="table">
                <thead>
                    <tr >
                        <th className="table-th">
                            <input type="checkbox"
                                id="selectAll"
                                checked={selectAll}
                                value={selectAll}
                                onClick={() => setSelectAll(!selectAll)}
                                className="custom-control-input"
                            />
                            <label htmlFor='selectAll' className="custom-control-label"></label>
                        </th>
                        <th className="table-th">Name</th>
                        <th className="table-th">Email</th>
                        <th className="table-th">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.length > 0 ? user?.map((contact, index) => (
                            <Contact key={index} contact={contact} selectAll={selectAll} setSelectAll={setSelectAll} handleRemove={handleRemove} setuserList={setuserList} />
                        )) : <div className="isloading-spiner">{isLoadinding === false ? <div className="spinner-border text-primary"></div> : ""}</div>
                    }
                </tbody>
            </table>
        </div>
    )
}
export default UserTable;
