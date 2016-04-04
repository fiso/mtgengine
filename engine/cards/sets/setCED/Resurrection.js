"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Resurrection extends Card {
  constructor(game) {
    super(game, "Resurrection", "Collector's Edition", "CED");
  }
}

module.exports = Resurrection;
