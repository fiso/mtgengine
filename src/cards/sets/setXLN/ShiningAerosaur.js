"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShiningAerosaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Shining Aerosaur", "Ixalan", "XLN");
  }
}

module.exports = ShiningAerosaur;
