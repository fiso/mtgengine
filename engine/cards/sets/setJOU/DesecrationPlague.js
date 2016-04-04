"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DesecrationPlague extends Card {
  constructor(game) {
    super(game, "Desecration Plague", "Journey into Nyx", "JOU");
  }
}

module.exports = DesecrationPlague;
