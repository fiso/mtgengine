"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ClockworkSteed extends Card {
  constructor(game) {
    super(game, "Clockwork Steed", "Fifth Edition", "5ED");
  }
}

module.exports = ClockworkSteed;
