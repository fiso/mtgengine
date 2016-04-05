"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CourtlyProvocateur extends UnimplementedCard {
  constructor(game) {
    super(game, "Courtly Provocateur", "Magic 2013", "M13");
  }
}

module.exports = CourtlyProvocateur;
