"use strict";
const Constants = require ("../../../Constants");
const PitilessHordeBase = require("../setDTK/PitilessHorde");

class PitilessHorde extends PitilessHordeBase {
  constructor (game) {
    super(game, "Pitiless Horde", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = PitilessHorde;
