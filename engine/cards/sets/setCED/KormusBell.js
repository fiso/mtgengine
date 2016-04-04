"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KormusBell extends Card {
  constructor(game) {
    super(game, "Kormus Bell", "Collector's Edition", "CED");
  }
}

module.exports = KormusBell;
