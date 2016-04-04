"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DaringApprenticeBase = require("../set6ED/DaringApprentice.js");

class DaringApprentice extends DaringApprenticeBase {
  constructor(game) {
    super(game, "Daring Apprentice", "Eighth Edition", "8ED");
  }
}

module.exports = DaringApprentice;
