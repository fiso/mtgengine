"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TempestofLightBase = require("../setM10/TempestofLight.js");

class TempestofLight extends TempestofLightBase {
  constructor(game) {
    super(game, "Tempest of Light", "Tenth Edition", "10E");
  }
}

module.exports = TempestofLight;
