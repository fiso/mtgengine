"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AlifromCairoBase = require("../setARN/AlifromCairo.js");

class AlifromCairo extends AlifromCairoBase {
  constructor(game) {
    super(game, "Ali from Cairo", "Masters Edition IV", "ME4");
  }
}

module.exports = AlifromCairo;
