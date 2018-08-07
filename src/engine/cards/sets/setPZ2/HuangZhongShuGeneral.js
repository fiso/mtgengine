"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuangZhongShuGeneral extends UnimplementedCard {
  constructor (game) {
    super(game, "Huang Zhong, Shu General", "You Make the Cube", "PZ2");
  }
}

module.exports = HuangZhongShuGeneral;
