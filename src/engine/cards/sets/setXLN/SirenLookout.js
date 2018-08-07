"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SirenLookout extends UnimplementedCard {
  constructor (game) {
    super(game, "Siren Lookout", "Ixalan", "XLN");
  }
}

module.exports = SirenLookout;
