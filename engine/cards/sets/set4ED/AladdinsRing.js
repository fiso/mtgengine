"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AladdinsRingBase = require("../setARN/AladdinsRing.js");

class AladdinsRing extends AladdinsRingBase {
  constructor(game) {
    super(game, "Aladdin's Ring", "Fourth Edition", "4ED");
  }
}

module.exports = AladdinsRing;
