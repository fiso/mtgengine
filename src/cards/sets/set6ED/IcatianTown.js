"use strict";
const Constants = require ("../../../Constants");
const IcatianTownBase = require("../setMED/IcatianTown");

class IcatianTown extends IcatianTownBase {
  constructor (game) {
    super(game, "Icatian Town", "Classic Sixth Edition", "6ED");
  }
}

module.exports = IcatianTown;
