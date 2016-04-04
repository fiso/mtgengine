"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IcatianPriestBase = require("../setDD3_DVD/IcatianPriest.js");

class IcatianPriest extends IcatianPriestBase {
  constructor(game) {
    super(game, "Icatian Priest", "Fallen Empires", "FEM");
  }
}

module.exports = IcatianPriest;
