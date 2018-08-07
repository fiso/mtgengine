"use strict";
const Constants = require ("../../../Constants");
const CarnivalHellsteedBase = require("../setRTR/CarnivalHellsteed");

class CarnivalHellsteed extends CarnivalHellsteedBase {
  constructor (game) {
    super(game, "Carnival Hellsteed", "Return to Ravnica Promos", "PRTR");
  }
}

module.exports = CarnivalHellsteed;
