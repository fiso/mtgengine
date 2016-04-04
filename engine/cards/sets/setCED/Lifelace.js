"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Lifelace extends Card {
  constructor(game) {
    super(game, "Lifelace", "Collector's Edition", "CED");
  }
}

module.exports = Lifelace;
