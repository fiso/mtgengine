"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Grixis extends Card {
  constructor(game) {
    super(game, "Grixis", "Planechase", "HOP");
  }
}

module.exports = Grixis;
