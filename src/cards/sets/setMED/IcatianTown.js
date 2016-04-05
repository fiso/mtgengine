"use strict";
const Constants = require ("../../../Constants");
const IcatianTownBase = require("../set6ED/IcatianTown");

class IcatianTown extends IcatianTownBase {
  constructor(game) {
    super(game, "Icatian Town", "Masters Edition", "MED");
  }
}

module.exports = IcatianTown;
