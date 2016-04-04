"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Larceny extends Card {
  constructor(game) {
    super(game, "Larceny", "Eighth Edition", "8ED");
  }
}

module.exports = Larceny;
