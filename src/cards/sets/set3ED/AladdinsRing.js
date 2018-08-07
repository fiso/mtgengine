"use strict";
const Constants = require ("../../../Constants");
const AladdinsRingBase = require("../set9ED/AladdinsRing");

class AladdinsRing extends AladdinsRingBase {
  constructor (game) {
    super(game, "Aladdin's Ring", "Revised Edition", "3ED");
  }
}

module.exports = AladdinsRing;
