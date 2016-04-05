"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YellowScarvesCavalry extends UnimplementedCard {
  constructor(game) {
    super(game, "Yellow Scarves Cavalry", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = YellowScarvesCavalry;
