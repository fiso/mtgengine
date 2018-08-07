"use strict";
const Constants = require ("../../../Constants");
const OkaunEyeofChaosBase = require("../setPBBD/OkaunEyeofChaos");

class OkaunEyeofChaos extends OkaunEyeofChaosBase {
  constructor (game) {
    super(game, "Okaun, Eye of Chaos", "Battlebond", "BBD");
  }
}

module.exports = OkaunEyeofChaos;
