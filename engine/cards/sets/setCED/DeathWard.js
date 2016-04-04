"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathWard extends Card {
  constructor(game) {
    super(game, "Death Ward", "Collector's Edition", "CED");
  }
}

module.exports = DeathWard;
