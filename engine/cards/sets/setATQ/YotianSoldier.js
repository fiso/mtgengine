"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YotianSoldier extends UnimplementedCard {
  constructor(game) {
    super(game, "Yotian Soldier", "Antiquities", "ATQ");
  }
}

module.exports = YotianSoldier;
