"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FickleEfreet extends Card {
  constructor(game) {
    super(game, "Fickle Efreet", "Prophecy", "PCY");
  }
}

module.exports = FickleEfreet;
