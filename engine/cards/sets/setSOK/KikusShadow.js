"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KikusShadow extends Card {
  constructor(game) {
    super(game, "Kiku's Shadow", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = KikusShadow;
