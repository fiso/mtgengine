"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JoinerAdept extends Card {
  constructor(game) {
    super(game, "Joiner Adept", "Fifth Dawn", "5DN");
  }
}

module.exports = JoinerAdept;
