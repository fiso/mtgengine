"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JolraelEmpressofBeastsBase = require("../setPCY/JolraelEmpressofBeasts.js");

class JolraelEmpressofBeasts extends JolraelEmpressofBeastsBase {
  constructor(game) {
    super(game, "Jolrael, Empress of Beasts", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = JolraelEmpressofBeasts;
