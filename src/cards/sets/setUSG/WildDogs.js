"use strict";
const Constants = require ("../../../Constants");
const WildDogsBase = require("../setWC99/WildDogs");

class WildDogs extends WildDogsBase {
  constructor (game) {
    super(game, "Wild Dogs", "Urza's Saga", "USG");
  }
}

module.exports = WildDogs;
