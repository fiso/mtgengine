"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TavernSwindlerBase = require("../setDDM/TavernSwindler.js");

class TavernSwindler extends TavernSwindlerBase {
  constructor(game) {
    super(game, "Tavern Swindler", "Return to Ravnica", "RTR");
  }
}

module.exports = TavernSwindler;
