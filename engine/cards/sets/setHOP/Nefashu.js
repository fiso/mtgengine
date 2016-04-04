"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Nefashu extends Card {
  constructor(game) {
    super(game, "Nefashu", "Planechase", "HOP");
  }
}

module.exports = Nefashu;
