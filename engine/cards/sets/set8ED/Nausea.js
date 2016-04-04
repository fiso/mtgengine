"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Nausea extends Card {
  constructor(game) {
    super(game, "Nausea", "Eighth Edition", "8ED");
  }
}

module.exports = Nausea;
