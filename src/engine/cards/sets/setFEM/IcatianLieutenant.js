"use strict";
const Constants = require ("../../../Constants");
const IcatianLieutenantBase = require("../setMED/IcatianLieutenant");

class IcatianLieutenant extends IcatianLieutenantBase {
  constructor (game) {
    super(game, "Icatian Lieutenant", "Fallen Empires", "FEM");
  }
}

module.exports = IcatianLieutenant;
