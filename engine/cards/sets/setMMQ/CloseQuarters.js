"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CloseQuarters extends UnimplementedCard {
  constructor(game) {
    super(game, "Close Quarters", "Mercadian Masques", "MMQ");
  }
}

module.exports = CloseQuarters;
