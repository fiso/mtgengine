"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Lifetap extends Card {
  constructor(game) {
    super(game, "Lifetap", "Collector's Edition", "CED");
  }
}

module.exports = Lifetap;
