"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TaintedIsle extends Card {
  constructor(game) {
    super(game, "Tainted Isle", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = TaintedIsle;
