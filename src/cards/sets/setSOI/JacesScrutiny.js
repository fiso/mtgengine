"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JacesScrutiny extends UnimplementedCard {
  constructor (game) {
    super(game, "Jace's Scrutiny", "Shadows over Innistrad", "SOI");
  }
}

module.exports = JacesScrutiny;
