"use strict";
const Constants = require ("../../../Constants");
const HalfdaneBase = require("../setME3/Halfdane");

class Halfdane extends HalfdaneBase {
  constructor (game) {
    super(game, "Halfdane", "Legends", "LEG");
  }
}

module.exports = Halfdane;
