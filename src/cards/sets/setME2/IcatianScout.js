"use strict";
const Constants = require ("../../../Constants");
const IcatianScoutBase = require("../setFEM/IcatianScout");

class IcatianScout extends IcatianScoutBase {
  constructor (game) {
    super(game, "Icatian Scout", "Masters Edition II", "ME2");
  }
}

module.exports = IcatianScout;
