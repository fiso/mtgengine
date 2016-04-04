"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AshioksAdept extends Card {
  constructor(game) {
    super(game, "Ashiok's Adept", "Born of the Gods", "BNG");
  }
}

module.exports = AshioksAdept;
