"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Bayou extends Card {
  constructor(game) {
    super(game, "Bayou", "Collector's Edition", "CED");
  }
}

module.exports = Bayou;
