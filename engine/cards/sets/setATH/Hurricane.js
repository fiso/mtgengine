"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Hurricane extends Card {
  constructor(game) {
    super(game, "Hurricane", "Anthologies", "ATH");
  }
}

module.exports = Hurricane;
