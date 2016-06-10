"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlmsBeast extends UnimplementedCard {
  constructor (game) {
    super(game, "Alms Beast", "Gatecrash", "GTC");
  }
}

module.exports = AlmsBeast;
