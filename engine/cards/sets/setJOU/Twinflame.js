"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Twinflame extends Card {
  constructor(game) {
    super(game, "Twinflame", "Journey into Nyx", "JOU");
  }
}

module.exports = Twinflame;
