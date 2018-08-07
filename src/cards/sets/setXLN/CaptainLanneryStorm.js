"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CaptainLanneryStorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Captain Lannery Storm", "Ixalan", "XLN");
  }
}

module.exports = CaptainLanneryStorm;
