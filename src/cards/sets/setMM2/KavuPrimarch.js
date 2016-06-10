"use strict";
const Constants = require ("../../../Constants");
const KavuPrimarchBase = require("../setFUT/KavuPrimarch");

class KavuPrimarch extends KavuPrimarchBase {
  constructor (game) {
    super(game, "Kavu Primarch", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = KavuPrimarch;
