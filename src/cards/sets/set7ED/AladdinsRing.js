"use strict";
const Constants = require ("../../../Constants");
const AladdinsRingBase = require("../set9ED/AladdinsRing");

class AladdinsRing extends AladdinsRingBase {
  constructor (game) {
    super(game, "Aladdin's Ring", "Seventh Edition", "7ED");
  }
}

module.exports = AladdinsRing;
