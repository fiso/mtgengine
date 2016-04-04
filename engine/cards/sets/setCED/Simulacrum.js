"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Simulacrum extends Card {
  constructor(game) {
    super(game, "Simulacrum", "Collector's Edition", "CED");
  }
}

module.exports = Simulacrum;
