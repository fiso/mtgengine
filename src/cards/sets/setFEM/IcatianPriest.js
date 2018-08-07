"use strict";
const Constants = require ("../../../Constants");
const IcatianPriestBase = require("../setDVD/IcatianPriest");

class IcatianPriest extends IcatianPriestBase {
  constructor (game) {
    super(game, "Icatian Priest", "Fallen Empires", "FEM");
  }
}

module.exports = IcatianPriest;
