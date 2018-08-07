"use strict";
const Constants = require ("../../../Constants");
const CurseofPredationBase = require("../setIMA/CurseofPredation");

class CurseofPredation extends CurseofPredationBase {
  constructor (game) {
    super(game, "Curse of Predation", "Commander Anthology", "CMA");
  }
}

module.exports = CurseofPredation;
