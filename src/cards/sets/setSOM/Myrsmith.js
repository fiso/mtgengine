"use strict";
const Constants = require ("../../../Constants");
const MyrsmithBase = require("../setMM2/Myrsmith");

class Myrsmith extends MyrsmithBase {
  constructor (game) {
    super(game, "Myrsmith", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Myrsmith;
