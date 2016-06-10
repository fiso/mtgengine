"use strict";
const Constants = require ("../../../Constants");
const AladdinsRingBase = require("../setARN/AladdinsRing");

class AladdinsRing extends AladdinsRingBase {
  constructor (game) {
    super(game, "Aladdin's Ring", "Classic Sixth Edition", "6ED");
  }
}

module.exports = AladdinsRing;
