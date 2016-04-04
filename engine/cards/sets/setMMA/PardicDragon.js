"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PardicDragon extends Card {
  constructor(game) {
    super(game, "Pardic Dragon", "Modern Masters", "MMA");
  }
}

module.exports = PardicDragon;
