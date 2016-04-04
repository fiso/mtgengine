"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Dreadwing extends Card {
  constructor(game) {
    super(game, "Dreadwing", "Conflux", "CON");
  }
}

module.exports = Dreadwing;
