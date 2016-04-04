"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Shock extends Card {
  constructor(game) {
    super(game, "Shock", "Beatdown Box Set", "BTD");
  }
}

module.exports = Shock;
