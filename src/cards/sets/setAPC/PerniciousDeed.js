"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PerniciousDeed extends UnimplementedCard {
  constructor(game) {
    super(game, "Pernicious Deed", "Apocalypse", "APC");
  }
}

module.exports = PerniciousDeed;
