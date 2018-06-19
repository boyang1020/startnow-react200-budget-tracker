import React from 'react';

export default class IncomeEntries extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='card border-success mb-3'>
                <div className='card-header text-white bg-success'>Income Entrie</div>
                <div className='car-body'>
                    <form>
                        <div className='from-group'>
                            <lable htmlFor='Income-description'>Description</lable>
                            <input
                                type='text'
                                className='form-control'
                                id='Income-description'
                            />
                        </div>
                        <div className='form-group'>
                            <lable htmlFor='Income-amount'>Amount</lable>
                            <div className='input-group'>
                                <span className='input-group-addon'>$</span>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='Income-amount'
                                />
                            </div>
                        </div>
                        <button
                            type='button'
                            className='btn btn-success col-12 mb-5'
                        >+ Add Income</button>
                        <table className='table table-sm' >
                            <thead className='table table-sm table-hover'>
                                <tr>
                                    <th>Description</th>
                                    <th style={{ width: 120 }} >Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Rent</td>
                                    <td>$1,500.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        );
    }
}