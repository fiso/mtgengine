"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Divert extends Card {
  constructor(game) {
    super(game, "Divert", "Odyssey", "ODY");
  }
}

module.exports = Divert;
