"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Demoralize extends Card {
  constructor(game) {
    super(game, "Demoralize", "Odyssey", "ODY");
  }
}

module.exports = Demoralize;
