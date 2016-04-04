"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MyrsmithBase = require("../setMM2/Myrsmith.js");

class Myrsmith extends MyrsmithBase {
  constructor(game) {
    super(game, "Myrsmith", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Myrsmith;
