"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Boomerang extends Card {
  constructor(game) {
    super(game, "Boomerang", "Chronicles", "CHR");
  }
}

module.exports = Boomerang;
