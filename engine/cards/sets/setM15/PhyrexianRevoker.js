"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianRevoker extends UnimplementedCard {
  constructor(game) {
    super(game, "Phyrexian Revoker", "Magic 2015 Core Set", "M15");
  }
}

module.exports = PhyrexianRevoker;
