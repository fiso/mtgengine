"use strict";
const Constants = require ("../../../Constants");
const WinterBlastBase = require("../set5ED/WinterBlast");

class WinterBlast extends WinterBlastBase {
  constructor(game) {
    super(game, "Winter Blast", "Fourth Edition", "4ED");
  }
}

module.exports = WinterBlast;
