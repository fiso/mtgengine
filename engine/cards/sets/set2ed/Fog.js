"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FogBase = require("../setARC/Fog.js");

class Fog extends FogBase {
  constructor(game) {
    super(game, "Fog", "Unlimited Edition", "2ED");
  }
}

module.exports = Fog;
