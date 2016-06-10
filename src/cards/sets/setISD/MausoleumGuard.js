"use strict";
const Constants = require ("../../../Constants");
const MausoleumGuardBase = require("../setDDK/MausoleumGuard");

class MausoleumGuard extends MausoleumGuardBase {
  constructor (game) {
    super(game, "Mausoleum Guard", "Innistrad", "ISD");
  }
}

module.exports = MausoleumGuard;
