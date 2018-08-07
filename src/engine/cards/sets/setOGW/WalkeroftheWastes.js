"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WalkeroftheWastes extends UnimplementedCard {
  constructor (game) {
    super(game, "Walker of the Wastes", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = WalkeroftheWastes;
