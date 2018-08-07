"use strict";
const Constants = require ("../../../Constants");
const DarksteelPlateBase = require("../setDDU/DarksteelPlate");

class DarksteelPlate extends DarksteelPlateBase {
  constructor (game) {
    super(game, "Darksteel Plate", "Mirrodin Besieged", "MBS");
  }
}

module.exports = DarksteelPlate;
