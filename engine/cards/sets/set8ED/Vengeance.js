"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Vengeance extends Card {
  constructor(game) {
    super(game, "Vengeance", "Eighth Edition", "8ED");
  }
}

module.exports = Vengeance;
