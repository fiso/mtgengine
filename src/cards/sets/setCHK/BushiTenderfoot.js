"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BushiTenderfoot extends UnimplementedCard {
  constructor (game) {
    super(game, "Bushi Tenderfoot", "Champions of Kamigawa", "CHK");
  }
}

module.exports = BushiTenderfoot;
