"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Cockatrice extends Card {
  constructor(game) {
    super(game, "Cockatrice", "Collector's Edition", "CED");
  }
}

module.exports = Cockatrice;
