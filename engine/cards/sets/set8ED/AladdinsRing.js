"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AladdinsRingBase = require("../setARN/AladdinsRing.js");

class AladdinsRing extends AladdinsRingBase {
  constructor(game) {
    super(game, "Aladdin's Ring", "Eighth Edition", "8ED");
  }
}

module.exports = AladdinsRing;
