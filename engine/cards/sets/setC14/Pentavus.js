"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Pentavus extends Card {
  constructor(game) {
    super(game, "Pentavus", "Commander 2014", "C14");
  }
}

module.exports = Pentavus;
