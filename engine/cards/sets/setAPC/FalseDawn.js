"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FalseDawn extends Card {
  constructor(game) {
    super(game, "False Dawn", "Apocalypse", "APC");
  }
}

module.exports = FalseDawn;
