"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkarrgGoliath extends UnimplementedCard {
  constructor (game) {
    super(game, "Skarrg Goliath", "Gatecrash", "GTC");
  }
}

module.exports = SkarrgGoliath;
