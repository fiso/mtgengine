"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuangZhongShuGeneral extends UnimplementedCard {
  constructor(game) {
    super(game, "Huang Zhong, Shu General", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = HuangZhongShuGeneral;
