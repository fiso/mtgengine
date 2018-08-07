"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RevokeExistence extends UnimplementedCard {
  constructor (game) {
    super(game, "Revoke Existence", "Born of the Gods", "BNG");
  }
}

module.exports = RevokeExistence;
