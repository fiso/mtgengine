"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Pendelhaven extends Card {
  constructor(game) {
    super(game, "Pendelhaven", "Anthologies", "ATH");
  }
}

module.exports = Pendelhaven;
