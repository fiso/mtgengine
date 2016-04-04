"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SupremeInquisitor extends Card {
  constructor(game) {
    super(game, "Supreme Inquisitor", "Onslaught", "ONS");
  }
}

module.exports = SupremeInquisitor;
