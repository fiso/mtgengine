"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ValiantGuard extends Card {
  constructor(game) {
    super(game, "Valiant Guard", "Conflux", "CON");
  }
}

module.exports = ValiantGuard;
