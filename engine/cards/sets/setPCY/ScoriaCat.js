"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScoriaCat extends Card {
  constructor(game) {
    super(game, "Scoria Cat", "Prophecy", "PCY");
  }
}

module.exports = ScoriaCat;
