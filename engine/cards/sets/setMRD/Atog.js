"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AtogBase = require("../setATQ/Atog.js");

class Atog extends AtogBase {
  constructor(game) {
    super(game, "Atog", "Mirrodin", "MRD");
  }
}

module.exports = Atog;
