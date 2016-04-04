"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Cognivore extends Card {
  constructor(game) {
    super(game, "Cognivore", "Odyssey", "ODY");
  }
}

module.exports = Cognivore;
