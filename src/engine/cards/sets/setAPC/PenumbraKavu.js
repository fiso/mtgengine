"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PenumbraKavu extends UnimplementedCard {
  constructor (game) {
    super(game, "Penumbra Kavu", "Apocalypse", "APC");
  }
}

module.exports = PenumbraKavu;
