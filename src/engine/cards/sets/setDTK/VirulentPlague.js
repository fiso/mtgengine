"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VirulentPlague extends UnimplementedCard {
  constructor (game) {
    super(game, "Virulent Plague", "Dragons of Tarkir", "DTK");
  }
}

module.exports = VirulentPlague;
