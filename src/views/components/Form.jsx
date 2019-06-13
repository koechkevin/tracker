import React from 'react';

const Form = ({
  handleSubmit, onChange, activeName, values, errors,
}) => {
  const findError = name => errors.filter(each => each.param === name);
  return (
    <div className="form-card" id={activeName}>
      <form onSubmit={handleSubmit}>
        <div className="label">Date</div>
        <input id={`${findError('date').length ? 'errors' : ''}`} value={values.date} name="date" type="date" onChange={onChange}/>
        <div className="label">channel</div>
        <input id={`${findError('channel').length ? 'errors' : ''}`} value={values.channel} name="channel" type="number" onChange={onChange}/>
        <div className="label">response</div>
        <input id={`${findError('response').length ? 'errors' : ''}`} value={values.response} name="response" type="number" onChange={onChange}/>
        <div className="label">direct message</div>
        <input id={`${findError('dm').length ? 'errors' : ''}`} value={values.dm} name="dm" type="number" onChange={onChange}/>
        <div className="label">multi Dm</div>
        <input id={`${findError('multiDm').length ? 'errors' : ''}`} value={values.multiDm} name="multiDm" type="number" onChange={onChange}/>
        <div className="label">sync</div>
        <input id={`${findError('Sync').length ? 'errors' : ''}`} value={values.Sync} name="Sync" type="number" onChange={onChange}/>
        <input type="submit" value="save" />
      </form>
    </div>
  );
};

export default Form;
