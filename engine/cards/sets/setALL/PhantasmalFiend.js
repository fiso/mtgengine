"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhantasmalFiend extends Card {
  constructor(game) {
    super(game, "Phantasmal Fiend", "Alliances", "ALL");
  }
}

module.exports = PhantasmalFiend;
