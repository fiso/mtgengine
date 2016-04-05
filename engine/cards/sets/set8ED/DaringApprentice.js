"use strict";
const Constants = require ("../../../Constants");
const DaringApprenticeBase = require("../set6ED/DaringApprentice");

class DaringApprentice extends DaringApprenticeBase {
  constructor(game) {
    super(game, "Daring Apprentice", "Eighth Edition", "8ED");
  }
}

module.exports = DaringApprentice;
