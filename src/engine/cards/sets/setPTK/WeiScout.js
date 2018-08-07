"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WeiScout extends UnimplementedCard {
  constructor (game) {
    super(game, "Wei Scout", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = WeiScout;
