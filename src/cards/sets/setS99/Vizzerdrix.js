"use strict";
const Constants = require ("../../../Constants");
const VizzerdrixBase = require("../set8ED/Vizzerdrix");

class Vizzerdrix extends VizzerdrixBase {
  constructor (game) {
    super(game, "Vizzerdrix", "Starter 1999", "S99");
  }
}

module.exports = Vizzerdrix;
