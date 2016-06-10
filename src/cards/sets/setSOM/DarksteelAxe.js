"use strict";
const Constants = require ("../../../Constants");
const DarksteelAxeBase = require("../setMM2/DarksteelAxe");

class DarksteelAxe extends DarksteelAxeBase {
  constructor (game) {
    super(game, "Darksteel Axe", "Scars of Mirrodin", "SOM");
  }
}

module.exports = DarksteelAxe;
