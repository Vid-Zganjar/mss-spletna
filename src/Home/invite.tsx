import React from 'react'
import  { useState } from 'react';

function invite() {
  return (
    <div className="container">
      <div className="left-panel">
        <h2>Vpišite se</h2>
        <form >
          <div className="form-group">
            <label>Ime:</label>
            <input
              type="text"
              name="ime"
              value=""
            />
          </div>
          <div className="form-group">
            <label>Priimek:</label>
            <input
              type="text"
              name="priimek"
              value=""
            />
          </div>
          <div className="form-group">
            <label>Kontakt (e-pošta/telefon):</label>
            <input
              type="text"
              name="kontakt"
              value=""
            />
          </div>
          <button type="submit">Pridruži se</button>
        </form>
      </div>
      <div className="right-panel">
        <h2>Vloge</h2>
        <ul>
          <li>Organizator</li>
          <li>Oblikovalec</li>
          <li>Turistični vodnik</li>
        </ul>
      </div>
    </div>
  )
}

export default invite