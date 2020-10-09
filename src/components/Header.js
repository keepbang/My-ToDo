import { Position } from '@blueprintjs/core';
import { DateInput } from '@blueprintjs/datetime';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {dateToString} from '../common/dateToString';

import '../css/Header.scss';
import { setDate } from '../store';


const Header = ({date, id,setChangeDate}) => {

    useEffect(() => {
        if(typeof id !== "undefined"){
            setChangeDate(dateToString(new Date(parseInt(id))));
        }
    }, [setChangeDate,id])

    const handleDateChange = (e) => {
        setChangeDate(dateToString(e));
    }


    return <>
        <h2 className="home_title">
            <DateInput
                className="home__date"
                formatDate={date => date.toLocaleString("ko-KR",{year: "numeric",month:"2-digit",day:"2-digit"})}
                onChange={handleDateChange}
                parseDate={str => new Date(str)}
                placeholder={"YYYY-MM-DD"}
                value={new Date(date)}
                popoverProps={{ position: Position.BOTTOM_LEFT }}
                disabled={id?true:false}
                minDate={new Date()}
                />
        </h2>
    </>
}

function mapStateToProps(state){
    return {
        date: state.date
    };
}

function mapDispatchToProps(dispatch){
    return {
        setChangeDate: d => dispatch(setDate(d))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);