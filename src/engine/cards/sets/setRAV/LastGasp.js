"use strict";
const Constants = require ("../../../Constants");
const LastGaspBase = require("../setBBD/LastGasp");

class LastGasp extends LastGaspBase {
  constructor (game) {
    super(game, "Last Gasp", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = LastGasp;
