"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YuanShaosInfantry extends UnimplementedCard {
  constructor (game) {
    super(game, "Yuan Shao's Infantry", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = YuanShaosInfantry;
