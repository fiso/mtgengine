"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IronclawOrcs extends Card {
  constructor(game) {
    super(game, "Ironclaw Orcs", "Collector's Edition", "CED");
  }
}

module.exports = IronclawOrcs;
