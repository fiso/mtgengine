"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoneyardParley extends UnimplementedCard {
  constructor (game) {
    super(game, "Boneyard Parley", "Ixalan", "XLN");
  }
}

module.exports = BoneyardParley;
