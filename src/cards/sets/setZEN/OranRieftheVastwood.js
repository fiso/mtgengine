"use strict";
const Constants = require ("../../../Constants");
const OranRieftheVastwoodBase = require("../setC14/OranRieftheVastwood");

class OranRieftheVastwood extends OranRieftheVastwoodBase {
  constructor (game) {
    super(game, "Oran-Rief, the Vastwood", "Zendikar", "ZEN");
  }
}

module.exports = OranRieftheVastwood;
