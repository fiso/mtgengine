"use strict";
const Constants = require ("../../../Constants");
const OranRieftheVastwoodBase = require("../setDDU/OranRieftheVastwood");

class OranRieftheVastwood extends OranRieftheVastwoodBase {
  constructor (game) {
    super(game, "Oran-Rief, the Vastwood", "Zendikar", "ZEN");
  }
}

module.exports = OranRieftheVastwood;
