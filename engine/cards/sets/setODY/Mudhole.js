"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mudhole extends Card {
  constructor(game) {
    super(game, "Mudhole", "Odyssey", "ODY");
  }
}

module.exports = Mudhole;
