"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RottingMastodon extends UnimplementedCard {
  constructor (game) {
    super(game, "Rotting Mastodon", "Khans of Tarkir", "KTK");
  }
}

module.exports = RottingMastodon;
