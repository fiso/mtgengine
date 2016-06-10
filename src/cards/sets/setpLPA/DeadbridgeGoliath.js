"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeadbridgeGoliath extends UnimplementedCard {
  constructor (game) {
    super(game, "Deadbridge Goliath", "Launch Parties", "pLPA");
  }
}

module.exports = DeadbridgeGoliath;
