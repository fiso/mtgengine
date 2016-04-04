"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Paralyze extends Card {
  constructor(game) {
    super(game, "Paralyze", "Collector's Edition", "CED");
  }
}

module.exports = Paralyze;
