"use strict";
const Constants = require ("../../../Constants");
const OranRieftheVastwoodBase = require("../setDDU/OranRieftheVastwood");

class OranRieftheVastwood extends OranRieftheVastwoodBase {
  constructor (game) {
    super(game, "Oran-Rief, the Vastwood", "Commander Anthology", "CMA");
  }
}

module.exports = OranRieftheVastwood;
