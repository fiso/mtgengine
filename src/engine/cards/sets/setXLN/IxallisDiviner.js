"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IxallisDiviner extends UnimplementedCard {
  constructor (game) {
    super(game, "Ixalli's Diviner", "Ixalan", "XLN");
  }
}

module.exports = IxallisDiviner;
