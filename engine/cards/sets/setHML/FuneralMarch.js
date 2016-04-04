"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FuneralMarchBase = require("../set5ED/FuneralMarch.js");

class FuneralMarch extends FuneralMarchBase {
  constructor(game) {
    super(game, "Funeral March", "Homelands", "HML");
  }
}

module.exports = FuneralMarch;
