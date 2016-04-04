"use strict";
const Constants = require ("../../../Constants");
const HalfdaneBase = require("../setLEG/Halfdane");

class Halfdane extends HalfdaneBase {
  constructor(game) {
    super(game, "Halfdane", "Masters Edition III", "ME3");
  }
}

module.exports = Halfdane;
