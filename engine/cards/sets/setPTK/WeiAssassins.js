"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WeiAssassins extends UnimplementedCard {
  constructor(game) {
    super(game, "Wei Assassins", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = WeiAssassins;
