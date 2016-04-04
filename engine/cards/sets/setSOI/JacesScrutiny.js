"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JacesScrutiny extends Card {
  constructor(game) {
    super(game, "Jace's Scrutiny", "Shadows over Innistrad", "SOI");
  }
}

module.exports = JacesScrutiny;
