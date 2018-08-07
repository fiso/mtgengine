"use strict";
const Constants = require ("../../../Constants");
const LightningRagerBase = require("../setTCM2/LightningRager");

class LightningRager extends LightningRagerBase {
  constructor (game) {
    super(game, "Lightning Rager", "Commander 2015 Tokens", "TC15");
  }
}

module.exports = LightningRager;
