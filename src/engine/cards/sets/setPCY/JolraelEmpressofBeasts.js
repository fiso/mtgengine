"use strict";
const Constants = require ("../../../Constants");
const JolraelEmpressofBeastsBase = require("../setTSB/JolraelEmpressofBeasts");

class JolraelEmpressofBeasts extends JolraelEmpressofBeastsBase {
  constructor (game) {
    super(game, "Jolrael, Empress of Beasts", "Prophecy", "PCY");
  }
}

module.exports = JolraelEmpressofBeasts;
