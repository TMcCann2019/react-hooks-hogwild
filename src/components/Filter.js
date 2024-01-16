import React from 'react'

export default function Filter({isShowGreased, onCheckedGreased, sortBy, onChangeSortBy}) {

    return (
        <div className="ui menu">
            <div className="ui item">
                <label>Greased Pigs Only?</label>
            </div>
            <div className="ui item">
                <input
                    type="checkbox"
                    className="ui toggle checkbox"
                    checked={isShowGreased}
                    onChange={(e => onCheckedGreased(e.target.checked))}
                />
            </div>
            <div className="ui item">
                <label>Sort by:</label>

            </div>
        </div>
    )
}
