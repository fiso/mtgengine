"use strict";
const Constants = require ("../../../Constants");
const IcatianPriestBase = require("../setDD3_DVD/IcatianPriest");

class IcatianPriest extends IcatianPriestBase {
  constructor(game) {
    super(game, "Icatian Priest", "Tenth Edition", "10E");
  }
}

module.exports = IcatianPriest;
