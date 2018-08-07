"use strict";
const Constants = require ("../../../Constants");
const DaringApprenticeBase = require("../set9ED/DaringApprentice");

class DaringApprentice extends DaringApprenticeBase {
  constructor (game) {
    super(game, "Daring Apprentice", "Classic Sixth Edition", "6ED");
  }
}

module.exports = DaringApprentice;
