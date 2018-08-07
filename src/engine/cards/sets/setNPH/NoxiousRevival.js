"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NoxiousRevival extends UnimplementedCard {
  constructor (game) {
    super(game, "Noxious Revival", "New Phyrexia", "NPH");
  }
}

module.exports = NoxiousRevival;
