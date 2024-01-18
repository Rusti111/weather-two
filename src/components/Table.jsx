import React from 'react';

const Table = ({ data }) => {
    return (
        <div>
            {
                JSON.stringify(data) === '{}'
                ? ''
                : <table>
                    <tr>
                        <td>temp °C</td>
                        <td>{(data.main?.temp-273.15).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>description</td>
                        <td>{data.weather[0].description}</td>
                    </tr>
                    <tr>
                        <td>city</td>
                        <td>{data.name}</td>
                    </tr>
                    <tr>
                        <td>count</td>
                        <td>{data.sys.country}</td>
                    </tr>
                </table>
            }
        </div>
    );
}

export default Table;
