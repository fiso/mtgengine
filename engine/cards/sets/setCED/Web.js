"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Web extends Card {
  constructor(game) {
    super(game, "Web", "Collector's Edition", "CED");
  }
}

module.exports = Web;
