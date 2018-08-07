"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IxalansBinding extends UnimplementedCard {
  constructor (game) {
    super(game, "Ixalan's Binding", "Ixalan", "XLN");
  }
}

module.exports = IxalansBinding;
