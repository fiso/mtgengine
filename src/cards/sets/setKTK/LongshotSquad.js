"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LongshotSquad extends UnimplementedCard {
  constructor (game) {
    super(game, "Longshot Squad", "Khans of Tarkir", "KTK");
  }
}

module.exports = LongshotSquad;
