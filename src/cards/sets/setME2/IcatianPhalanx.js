"use strict";
const Constants = require ("../../../Constants");
const IcatianPhalanxBase = require("../setFEM/IcatianPhalanx");

class IcatianPhalanx extends IcatianPhalanxBase {
  constructor(game) {
    super(game, "Icatian Phalanx", "Masters Edition II", "ME2");
  }
}

module.exports = IcatianPhalanx;
