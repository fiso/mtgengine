"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InexorableTideBase = require("../setMM2/InexorableTide.js");

class InexorableTide extends InexorableTideBase {
  constructor(game) {
    super(game, "Inexorable Tide", "Scars of Mirrodin", "SOM");
  }
}

module.exports = InexorableTide;
