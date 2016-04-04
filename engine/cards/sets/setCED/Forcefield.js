"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Forcefield extends Card {
  constructor(game) {
    super(game, "Forcefield", "Collector's Edition", "CED");
  }
}

module.exports = Forcefield;
