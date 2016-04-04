"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IgneousPouncer extends Card {
  constructor(game) {
    super(game, "Igneous Pouncer", "Alara Reborn", "ARB");
  }
}

module.exports = IgneousPouncer;
