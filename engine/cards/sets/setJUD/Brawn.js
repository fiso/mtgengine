"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Brawn extends Card {
  constructor(game) {
    super(game, "Brawn", "Judgment", "JUD");
  }
}

module.exports = Brawn;
