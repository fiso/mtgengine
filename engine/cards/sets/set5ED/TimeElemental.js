"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TimeElemental extends Card {
  constructor(game) {
    super(game, "Time Elemental", "Fifth Edition", "5ED");
  }
}

module.exports = TimeElemental;
