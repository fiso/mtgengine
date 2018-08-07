"use strict";
const Constants = require ("../../../Constants");
const SunkenCityBase = require("../setMED/SunkenCity");

class SunkenCity extends SunkenCityBase {
  constructor (game) {
    super(game, "Sunken City", "Fourth Edition", "4ED");
  }
}

module.exports = SunkenCity;
