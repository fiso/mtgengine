"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IronMaiden extends Card {
  constructor(game) {
    super(game, "Iron Maiden", "Urza's Legacy", "ULG");
  }
}

module.exports = IronMaiden;
