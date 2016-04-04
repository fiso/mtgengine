"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Tsunami extends Card {
  constructor(game) {
    super(game, "Tsunami", "Collector's Edition", "CED");
  }
}

module.exports = Tsunami;
