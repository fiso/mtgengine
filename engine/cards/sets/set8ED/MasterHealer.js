"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MasterHealer extends Card {
  constructor(game) {
    super(game, "Master Healer", "Eighth Edition", "8ED");
  }
}

module.exports = MasterHealer;
