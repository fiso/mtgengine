"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeartlessHidetsugu extends UnimplementedCard {
  constructor(game) {
    super(game, "Heartless Hidetsugu", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = HeartlessHidetsugu;
