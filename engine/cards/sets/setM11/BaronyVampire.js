"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BaronyVampire extends Card {
  constructor(game) {
    super(game, "Barony Vampire", "Magic 2011", "M11");
  }
}

module.exports = BaronyVampire;
