"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SunglassesofUrzaBase = require("../setCED/SunglassesofUrza.js");

class SunglassesofUrza extends SunglassesofUrzaBase {
  constructor(game) {
    super(game, "Sunglasses of Urza", "Unlimited Edition", "2ED");
  }
}

module.exports = SunglassesofUrza;
