"use strict";
const Constants = require ("../../../Constants");
const IcatianJavelineersBase = require("../setDDO/IcatianJavelineers");

class IcatianJavelineers extends IcatianJavelineersBase {
  constructor (game) {
    super(game, "Icatian Javelineers", "Gateway 2006", "PGTW");
  }
}

module.exports = IcatianJavelineers;
