"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrzasChalice extends UnimplementedCard {
  constructor (game) {
    super(game, "Urza's Chalice", "Masters Edition IV", "ME4");
  }
}

module.exports = UrzasChalice;
