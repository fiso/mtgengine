"use strict";
const Constants = require ("../../../Constants");
const OmniscienceBase = require("../setM19/Omniscience");

class Omniscience extends OmniscienceBase {
  constructor (game) {
    super(game, "Omniscience", "Amonkhet Invocations", "MP2");
  }
}

module.exports = Omniscience;
