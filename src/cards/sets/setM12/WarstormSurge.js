"use strict";
const Constants = require ("../../../Constants");
const WarstormSurgeBase = require("../setC13/WarstormSurge");

class WarstormSurge extends WarstormSurgeBase {
  constructor (game) {
    super(game, "Warstorm Surge", "Magic 2012", "M12");
  }
}

module.exports = WarstormSurge;
