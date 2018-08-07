"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZhouYuChiefCommander extends UnimplementedCard {
  constructor (game) {
    super(game, "Zhou Yu, Chief Commander", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZhouYuChiefCommander;
