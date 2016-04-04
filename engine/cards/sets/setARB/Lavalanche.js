"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Lavalanche extends Card {
  constructor(game) {
    super(game, "Lavalanche", "Alara Reborn", "ARB");
  }
}

module.exports = Lavalanche;
