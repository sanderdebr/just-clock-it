import React, { useState } from 'react';

import firebase from '../firebase';

const AddTimeEntryForm = () => {

    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');

    function onSubmit(e) {
        e.preventDefault();

        firebase
            .firestore()
            .collection('times')
            .add({
                title,
                time_second: parseInt(time)
            })
            .then(() => {
                setTitle('')
                setTime('')
            })
    }

    return (
        <form onSubmit={onSubmit}>
            <h4>Add Time Entry</h4>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={e => setTitle(e.currentTarget.value)} ></input>
            </div>
            <div>
                <label>Time</label>
                <input type="number" value={time} onChange={e => setTime(e.currentTarget.value)} ></input>
            </div>
            <button>Add Time</button>
        </form>
    )
}

export default AddTimeEntryForm;