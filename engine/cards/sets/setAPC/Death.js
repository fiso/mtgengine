"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Death extends Card {
  constructor(game) {
    super(game, "Death", "Apocalypse", "APC");
  }
}

module.exports = Death;
