"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Panopticon extends Card {
  constructor(game) {
    super(game, "Panopticon", "Planechase", "HOP");
  }
}

module.exports = Panopticon;
