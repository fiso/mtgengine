"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LambholtElder extends Card {
  constructor(game) {
    super(game, "Lambholt Elder", "Dark Ascension", "DKA");
  }
}

module.exports = LambholtElder;
