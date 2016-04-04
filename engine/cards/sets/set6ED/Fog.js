"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FogBase = require("../setARC/Fog.js");

class Fog extends FogBase {
  constructor(game) {
    super(game, "Fog", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Fog;
