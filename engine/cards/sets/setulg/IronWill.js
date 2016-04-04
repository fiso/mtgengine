"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IronWill extends Card {
  constructor(game) {
    super(game, "Iron Will", "Urza's Legacy", "ULG");
  }
}

module.exports = IronWill;
