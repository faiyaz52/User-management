import React from 'react'
import "../../style/user.scss"
const Contact = ({ contact, selectAll, setSelectAll, handleRemove }) => {
    const [select, setSelect] = React.useState(false)
    const { phone, email, picture, name, login } = contact
    const removeUser = () => {
        setSelect(!select)
    }
    return (
        <>
            <tr>
                <td>
                    {
                        selectAll ? <div>
                            <input type="checkbox"
                                id="selectAll"
                                checked={selectAll}
                                value={selectAll}
                                onClick={() => setSelectAll(!selectAll)}
                                className="custom-control-input"
                            />
                            <label htmlFor='selectAll' className="custom-control-label"></label>
                        </div> : <div>
                            <input type="checkbox"
                                id="select"
                                checked={select}
                                onClick={() => removeUser()}
                                className="custom-control-input"
                            />
                            <label htmlFor='select' className="custom-control-label"></label>
                        </div>
                    }
                </td>
                <td>
                    {<img src={picture?.medium} alt={picture?.thumbnail} className="user-image" />}
                    {`${name?.first} ${name?.last}`}</td>
                <td >{email}</td>
                <td onClick={() => handleRemove(login?.uuid)}>{phone} {select ? <span className="glyphicon glyphicon-trash" style={{ color: "#3e45cf", paddingLeft: "13px" }}></span> : ""}</td>
            </tr>
          
        </>
    )
}
export default Contact