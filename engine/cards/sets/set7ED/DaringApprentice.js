"use strict";
const Constants = require ("../../../Constants");
const DaringApprenticeBase = require("../set6ED/DaringApprentice");

class DaringApprentice extends DaringApprenticeBase {
  constructor(game) {
    super(game, "Daring Apprentice", "Seventh Edition", "7ED");
  }
}

module.exports = DaringApprentice;
