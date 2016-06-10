"use strict";
const Constants = require ("../../../Constants");
const WinterBlastBase = require("../set5ED/WinterBlast");

class WinterBlast extends WinterBlastBase {
  constructor (game) {
    super(game, "Winter Blast", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = WinterBlast;
