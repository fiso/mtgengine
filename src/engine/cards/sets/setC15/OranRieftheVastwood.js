"use strict";
const Constants = require ("../../../Constants");
const OranRieftheVastwoodBase = require("../setDDU/OranRieftheVastwood");

class OranRieftheVastwood extends OranRieftheVastwoodBase {
  constructor (game) {
    super(game, "Oran-Rief, the Vastwood", "Commander 2015", "C15");
  }
}

module.exports = OranRieftheVastwood;
