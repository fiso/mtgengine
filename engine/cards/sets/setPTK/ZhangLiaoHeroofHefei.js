"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZhangLiaoHeroofHefei extends UnimplementedCard {
  constructor(game) {
    super(game, "Zhang Liao, Hero of Hefei", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZhangLiaoHeroofHefei;
