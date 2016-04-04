"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Badlands extends Card {
  constructor(game) {
    super(game, "Badlands", "Collector's Edition", "CED");
  }
}

module.exports = Badlands;
