"use strict";
const Constants = require ("../../../Constants");
const VizzerdrixBase = require("../set9ED/Vizzerdrix");

class Vizzerdrix extends VizzerdrixBase {
  constructor (game) {
    super(game, "Vizzerdrix", "Eighth Edition", "8ED");
  }
}

module.exports = Vizzerdrix;
