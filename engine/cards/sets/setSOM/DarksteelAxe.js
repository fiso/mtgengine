"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DarksteelAxeBase = require("../setMM2/DarksteelAxe.js");

class DarksteelAxe extends DarksteelAxeBase {
  constructor(game) {
    super(game, "Darksteel Axe", "Scars of Mirrodin", "SOM");
  }
}

module.exports = DarksteelAxe;
