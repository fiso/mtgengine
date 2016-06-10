"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WuScout extends UnimplementedCard {
  constructor (game) {
    super(game, "Wu Scout", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = WuScout;
