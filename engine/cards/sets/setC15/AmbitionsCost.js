"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AmbitionsCost extends Card {
  constructor(game) {
    super(game, "Ambition's Cost", "Commander 2015", "C15");
  }
}

module.exports = AmbitionsCost;
