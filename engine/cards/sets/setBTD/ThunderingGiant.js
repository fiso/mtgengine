"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThunderingGiant extends Card {
  constructor(game) {
    super(game, "Thundering Giant", "Beatdown Box Set", "BTD");
  }
}

module.exports = ThunderingGiant;
