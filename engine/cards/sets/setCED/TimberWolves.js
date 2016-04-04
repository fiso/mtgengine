"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TimberWolves extends Card {
  constructor(game) {
    super(game, "Timber Wolves", "Collector's Edition", "CED");
  }
}

module.exports = TimberWolves;
