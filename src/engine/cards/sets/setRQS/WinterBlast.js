"use strict";
const Constants = require ("../../../Constants");
const WinterBlastBase = require("../setMED/WinterBlast");

class WinterBlast extends WinterBlastBase {
  constructor (game) {
    super(game, "Winter Blast", "Rivals Quick Start Set", "RQS");
  }
}

module.exports = WinterBlast;
