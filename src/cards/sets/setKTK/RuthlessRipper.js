"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RuthlessRipper extends UnimplementedCard {
  constructor (game) {
    super(game, "Ruthless Ripper", "Khans of Tarkir", "KTK");
  }
}

module.exports = RuthlessRipper;
