"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IceStorm extends Card {
  constructor(game) {
    super(game, "Ice Storm", "Collector's Edition", "CED");
  }
}

module.exports = IceStorm;
