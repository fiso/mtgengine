"use strict";
const Constants = require ("../../../Constants");
const AzorsGatewaySanctumoftheSunBase = require("../setPRIX/AzorsGatewaySanctumoftheSun");

class AzorsGatewaySanctumoftheSun extends AzorsGatewaySanctumoftheSunBase {
  constructor (game) {
    super(game, "Azor's Gateway // Sanctum of the Sun", "Rivals of Ixalan", "RIX");
  }
}

module.exports = AzorsGatewaySanctumoftheSun;
