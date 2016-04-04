"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Purelace extends Card {
  constructor(game) {
    super(game, "Purelace", "Collector's Edition", "CED");
  }
}

module.exports = Purelace;
