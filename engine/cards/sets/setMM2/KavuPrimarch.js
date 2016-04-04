"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KavuPrimarchBase = require("../setFUT/KavuPrimarch.js");

class KavuPrimarch extends KavuPrimarchBase {
  constructor(game) {
    super(game, "Kavu Primarch", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = KavuPrimarch;
