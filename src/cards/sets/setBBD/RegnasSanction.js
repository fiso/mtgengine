"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RegnasSanction extends UnimplementedCard {
  constructor (game) {
    super(game, "Regna's Sanction", "Battlebond", "BBD");
  }
}

module.exports = RegnasSanction;
