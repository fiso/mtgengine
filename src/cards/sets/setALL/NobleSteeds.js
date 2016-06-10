"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NobleSteeds extends UnimplementedCard {
  constructor (game) {
    super(game, "Noble Steeds", "Alliances", "ALL");
  }
}

module.exports = NobleSteeds;
