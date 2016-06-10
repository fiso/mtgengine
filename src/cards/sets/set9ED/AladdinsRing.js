"use strict";
const Constants = require ("../../../Constants");
const AladdinsRingBase = require("../setARN/AladdinsRing");

class AladdinsRing extends AladdinsRingBase {
  constructor (game) {
    super(game, "Aladdin's Ring", "Ninth Edition", "9ED");
  }
}

module.exports = AladdinsRing;
