"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HolyLightBase = require("../setMED/HolyLight.js");

class HolyLight extends HolyLightBase {
  constructor(game) {
    super(game, "Holy Light", "The Dark", "DRK");
  }
}

module.exports = HolyLight;
