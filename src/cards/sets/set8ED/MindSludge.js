"use strict";
const Constants = require ("../../../Constants");
const MindSludgeBase = require("../setZEN/MindSludge");

class MindSludge extends MindSludgeBase {
  constructor (game) {
    super(game, "Mind Sludge", "Eighth Edition", "8ED");
  }
}

module.exports = MindSludge;
