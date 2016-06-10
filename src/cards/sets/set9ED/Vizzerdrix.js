"use strict";
const Constants = require ("../../../Constants");
const VizzerdrixBase = require("../set8ED/Vizzerdrix");

class Vizzerdrix extends VizzerdrixBase {
  constructor (game) {
    super(game, "Vizzerdrix", "Ninth Edition", "9ED");
  }
}

module.exports = Vizzerdrix;
