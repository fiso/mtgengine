"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SarkhanUnbroken extends UnimplementedCard {
  constructor (game) {
    super(game, "Sarkhan Unbroken", "Dragons of Tarkir", "DTK");
  }
}

module.exports = SarkhanUnbroken;
