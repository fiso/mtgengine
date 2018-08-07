"use strict";
const Constants = require ("../../../Constants");
const WinterBlastBase = require("../setMED/WinterBlast");

class WinterBlast extends WinterBlastBase {
  constructor (game) {
    super(game, "Winter Blast", "Fifth Edition", "5ED");
  }
}

module.exports = WinterBlast;
