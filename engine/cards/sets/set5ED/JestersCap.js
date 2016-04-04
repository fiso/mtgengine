"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JestersCap extends Card {
  constructor(game) {
    super(game, "Jester's Cap", "Fifth Edition", "5ED");
  }
}

module.exports = JestersCap;
