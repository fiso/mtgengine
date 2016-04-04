"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SunkenCityBase = require("../set4ED/SunkenCity.js");

class SunkenCity extends SunkenCityBase {
  constructor(game) {
    super(game, "Sunken City", "The Dark", "DRK");
  }
}

module.exports = SunkenCity;
