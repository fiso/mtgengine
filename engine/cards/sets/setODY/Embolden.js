"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Embolden extends Card {
  constructor(game) {
    super(game, "Embolden", "Odyssey", "ODY");
  }
}

module.exports = Embolden;
