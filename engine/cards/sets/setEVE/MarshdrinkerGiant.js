"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarshdrinkerGiant extends Card {
  constructor(game) {
    super(game, "Marshdrinker Giant", "Eventide", "EVE");
  }
}

module.exports = MarshdrinkerGiant;
