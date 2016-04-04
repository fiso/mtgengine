"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Timetwister extends Card {
  constructor(game) {
    super(game, "Timetwister", "Collector's Edition", "CED");
  }
}

module.exports = Timetwister;
