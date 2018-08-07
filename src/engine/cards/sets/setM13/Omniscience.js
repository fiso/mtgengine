"use strict";
const Constants = require ("../../../Constants");
const OmniscienceBase = require("../setM19/Omniscience");

class Omniscience extends OmniscienceBase {
  constructor (game) {
    super(game, "Omniscience", "Magic 2013", "M13");
  }
}

module.exports = Omniscience;
