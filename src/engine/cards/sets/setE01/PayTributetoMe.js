"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PayTributetoMe extends UnimplementedCard {
  constructor (game) {
    super(game, "Pay Tribute to Me", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = PayTributetoMe;
