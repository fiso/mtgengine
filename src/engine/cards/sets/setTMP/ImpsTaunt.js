"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImpsTaunt extends UnimplementedCard {
  constructor (game) {
    super(game, "Imps' Taunt", "Tempest", "TMP");
  }
}

module.exports = ImpsTaunt;
