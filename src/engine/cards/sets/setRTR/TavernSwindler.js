"use strict";
const Constants = require ("../../../Constants");
const TavernSwindlerBase = require("../setBBD/TavernSwindler");

class TavernSwindler extends TavernSwindlerBase {
  constructor (game) {
    super(game, "Tavern Swindler", "Return to Ravnica", "RTR");
  }
}

module.exports = TavernSwindler;
