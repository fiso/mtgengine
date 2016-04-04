"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeliumSquirter extends Card {
  constructor(game) {
    super(game, "Helium Squirter", "Dissension", "DIS");
  }
}

module.exports = HeliumSquirter;
