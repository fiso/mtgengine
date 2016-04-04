"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MightWeaver extends Card {
  constructor(game) {
    super(game, "Might Weaver", "Invasion", "INV");
  }
}

module.exports = MightWeaver;
