"use strict";
const Constants = require ("../../../Constants");
const IcatianJavelineersBase = require("../setDDO/IcatianJavelineers");

class IcatianJavelineers extends IcatianJavelineersBase {
  constructor (game) {
    super(game, "Icatian Javelineers", "Fallen Empires", "FEM");
  }
}

module.exports = IcatianJavelineers;
