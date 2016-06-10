"use strict";
const Constants = require ("../../../Constants");
const SunkenCityBase = require("../set4ED/SunkenCity");

class SunkenCity extends SunkenCityBase {
  constructor (game) {
    super(game, "Sunken City", "The Dark", "DRK");
  }
}

module.exports = SunkenCity;
