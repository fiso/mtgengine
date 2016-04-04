"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Terravore extends Card {
  constructor(game) {
    super(game, "Terravore", "Odyssey", "ODY");
  }
}

module.exports = Terravore;
