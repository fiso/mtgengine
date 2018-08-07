"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlossomDryad extends UnimplementedCard {
  constructor (game) {
    super(game, "Blossom Dryad", "Ixalan", "XLN");
  }
}

module.exports = BlossomDryad;
