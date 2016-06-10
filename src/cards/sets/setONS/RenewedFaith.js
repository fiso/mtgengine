"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RenewedFaith extends UnimplementedCard {
  constructor (game) {
    super(game, "Renewed Faith", "Onslaught", "ONS");
  }
}

module.exports = RenewedFaith;
