"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Savannah extends Card {
  constructor(game) {
    super(game, "Savannah", "Collector's Edition", "CED");
  }
}

module.exports = Savannah;
