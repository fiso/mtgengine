"use strict";
const Constants = require ("../../../Constants");
const CarnivalHellsteedBase = require("../setpPRE/CarnivalHellsteed");

class CarnivalHellsteed extends CarnivalHellsteedBase {
  constructor (game) {
    super(game, "Carnival Hellsteed", "Return to Ravnica", "RTR");
  }
}

module.exports = CarnivalHellsteed;
