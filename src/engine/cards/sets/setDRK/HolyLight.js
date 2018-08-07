"use strict";
const Constants = require ("../../../Constants");
const HolyLightBase = require("../setMED/HolyLight");

class HolyLight extends HolyLightBase {
  constructor (game) {
    super(game, "Holy Light", "The Dark", "DRK");
  }
}

module.exports = HolyLight;
