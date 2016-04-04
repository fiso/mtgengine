"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrandmotherSengirBase = require("../setHML/GrandmotherSengir.js");

class GrandmotherSengir extends GrandmotherSengirBase {
  constructor(game) {
    super(game, "Grandmother Sengir", "Masters Edition II", "ME2");
  }
}

module.exports = GrandmotherSengir;
