"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShamblingStrider extends Card {
  constructor(game) {
    super(game, "Shambling Strider", "Beatdown Box Set", "BTD");
  }
}

module.exports = ShamblingStrider;
