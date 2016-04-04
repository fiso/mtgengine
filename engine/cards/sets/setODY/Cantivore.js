"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Cantivore extends Card {
  constructor(game) {
    super(game, "Cantivore", "Odyssey", "ODY");
  }
}

module.exports = Cantivore;
