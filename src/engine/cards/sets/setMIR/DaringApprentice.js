"use strict";
const Constants = require ("../../../Constants");
const DaringApprenticeBase = require("../set9ED/DaringApprentice");

class DaringApprentice extends DaringApprenticeBase {
  constructor (game) {
    super(game, "Daring Apprentice", "Mirage", "MIR");
  }
}

module.exports = DaringApprentice;
