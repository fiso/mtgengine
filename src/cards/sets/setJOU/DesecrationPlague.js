"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesecrationPlague extends UnimplementedCard {
  constructor (game) {
    super(game, "Desecration Plague", "Journey into Nyx", "JOU");
  }
}

module.exports = DesecrationPlague;
