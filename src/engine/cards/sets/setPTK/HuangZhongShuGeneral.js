"use strict";
const Constants = require ("../../../Constants");
const HuangZhongShuGeneralBase = require("../setPZ2/HuangZhongShuGeneral");

class HuangZhongShuGeneral extends HuangZhongShuGeneralBase {
  constructor (game) {
    super(game, "Huang Zhong, Shu General", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = HuangZhongShuGeneral;
