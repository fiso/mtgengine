"use strict";
const Constants = require ("../../../Constants");
const IcatianPhalanxBase = require("../setFEM/IcatianPhalanx");

class IcatianPhalanx extends IcatianPhalanxBase {
  constructor (game) {
    super(game, "Icatian Phalanx", "Fifth Edition", "5ED");
  }
}

module.exports = IcatianPhalanx;
