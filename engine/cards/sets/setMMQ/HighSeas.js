"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HighSeas extends UnimplementedCard {
  constructor(game) {
    super(game, "High Seas", "Mercadian Masques", "MMQ");
  }
}

module.exports = HighSeas;
