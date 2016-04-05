"use strict";
const Constants = require ("../../../Constants");
const IcatianJavelineersBase = require("../setATH/IcatianJavelineers");

class IcatianJavelineers extends IcatianJavelineersBase {
  constructor(game) {
    super(game, "Icatian Javelineers", "Masters Edition II", "ME2");
  }
}

module.exports = IcatianJavelineers;
