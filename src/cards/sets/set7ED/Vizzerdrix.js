"use strict";
const Constants = require ("../../../Constants");
const VizzerdrixBase = require("../set8ED/Vizzerdrix");

class Vizzerdrix extends VizzerdrixBase {
  constructor (game) {
    super(game, "Vizzerdrix", "Seventh Edition", "7ED");
  }
}

module.exports = Vizzerdrix;
