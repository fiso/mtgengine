"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Lifeforce extends Card {
  constructor(game) {
    super(game, "Lifeforce", "Collector's Edition", "CED");
  }
}

module.exports = Lifeforce;
