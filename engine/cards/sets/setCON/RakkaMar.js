"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RakkaMar extends Card {
  constructor(game) {
    super(game, "Rakka Mar", "Conflux", "CON");
  }
}

module.exports = RakkaMar;
