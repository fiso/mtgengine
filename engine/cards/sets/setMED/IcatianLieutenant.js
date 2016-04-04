"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IcatianLieutenantBase = require("../setFEM/IcatianLieutenant.js");

class IcatianLieutenant extends IcatianLieutenantBase {
  constructor(game) {
    super(game, "Icatian Lieutenant", "Masters Edition", "MED");
  }
}

module.exports = IcatianLieutenant;
