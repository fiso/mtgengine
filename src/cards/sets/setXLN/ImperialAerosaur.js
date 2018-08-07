"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImperialAerosaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Imperial Aerosaur", "Ixalan", "XLN");
  }
}

module.exports = ImperialAerosaur;
