"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlackWard extends Card {
  constructor(game) {
    super(game, "Black Ward", "Collector's Edition", "CED");
  }
}

module.exports = BlackWard;
