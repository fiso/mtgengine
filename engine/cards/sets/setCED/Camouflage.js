"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Camouflage extends Card {
  constructor(game) {
    super(game, "Camouflage", "Collector's Edition", "CED");
  }
}

module.exports = Camouflage;
