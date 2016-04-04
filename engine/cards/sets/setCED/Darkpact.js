"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Darkpact extends Card {
  constructor(game) {
    super(game, "Darkpact", "Collector's Edition", "CED");
  }
}

module.exports = Darkpact;
