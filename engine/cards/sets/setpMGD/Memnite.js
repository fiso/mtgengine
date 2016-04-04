"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Memnite extends Card {
  constructor(game) {
    super(game, "Memnite", "Magic Game Day", "pMGD");
  }
}

module.exports = Memnite;
