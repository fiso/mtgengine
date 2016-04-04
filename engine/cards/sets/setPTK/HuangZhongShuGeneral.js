"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HuangZhongShuGeneral extends Card {
  constructor(game) {
    super(game, "Huang Zhong, Shu General", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = HuangZhongShuGeneral;
