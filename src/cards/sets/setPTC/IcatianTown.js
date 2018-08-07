"use strict";
const Constants = require ("../../../Constants");
const IcatianTownBase = require("../setMED/IcatianTown");

class IcatianTown extends IcatianTownBase {
  constructor (game) {
    super(game, "Icatian Town", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = IcatianTown;
