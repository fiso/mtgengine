"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IcatianPhalanxBase = require("../setFEM/IcatianPhalanx.js");

class IcatianPhalanx extends IcatianPhalanxBase {
  constructor(game) {
    super(game, "Icatian Phalanx", "Masters Edition II", "ME2");
  }
}

module.exports = IcatianPhalanx;
