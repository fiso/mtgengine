"use strict";
const Constants = require ("../../../Constants");
const IcatianLieutenantBase = require("../setFEM/IcatianLieutenant");

class IcatianLieutenant extends IcatianLieutenantBase {
  constructor(game) {
    super(game, "Icatian Lieutenant", "Masters Edition", "MED");
  }
}

module.exports = IcatianLieutenant;
