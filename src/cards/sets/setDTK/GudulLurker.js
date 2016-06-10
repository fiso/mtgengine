"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GudulLurker extends UnimplementedCard {
  constructor (game) {
    super(game, "Gudul Lurker", "Dragons of Tarkir", "DTK");
  }
}

module.exports = GudulLurker;
