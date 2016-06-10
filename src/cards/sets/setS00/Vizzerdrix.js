"use strict";
const Constants = require ("../../../Constants");
const VizzerdrixBase = require("../set8ED/Vizzerdrix");

class Vizzerdrix extends VizzerdrixBase {
  constructor (game) {
    super(game, "Vizzerdrix", "Starter 2000", "S00");
  }
}

module.exports = Vizzerdrix;
