"use strict";
const Constants = require ("../../../Constants");
const ApocalypseChimeBase = require("../setPTC/ApocalypseChime");

class ApocalypseChime extends ApocalypseChimeBase {
  constructor (game) {
    super(game, "Apocalypse Chime", "Homelands", "HML");
  }
}

module.exports = ApocalypseChime;
