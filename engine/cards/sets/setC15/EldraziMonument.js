"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EldraziMonument extends Card {
  constructor(game) {
    super(game, "Eldrazi Monument", "Commander 2015", "C15");
  }
}

module.exports = EldraziMonument;
