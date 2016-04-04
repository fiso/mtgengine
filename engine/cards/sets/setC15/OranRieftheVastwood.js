"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OranRieftheVastwoodBase = require("../setC14/OranRieftheVastwood.js");

class OranRieftheVastwood extends OranRieftheVastwoodBase {
  constructor(game) {
    super(game, "Oran-Rief, the Vastwood", "Commander 2015", "C15");
  }
}

module.exports = OranRieftheVastwood;
