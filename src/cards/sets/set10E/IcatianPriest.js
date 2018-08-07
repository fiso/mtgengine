"use strict";
const Constants = require ("../../../Constants");
const IcatianPriestBase = require("../setDVD/IcatianPriest");

class IcatianPriest extends IcatianPriestBase {
  constructor (game) {
    super(game, "Icatian Priest", "Tenth Edition", "10E");
  }
}

module.exports = IcatianPriest;
