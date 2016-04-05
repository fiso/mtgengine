"use strict";
const Constants = require ("../../../Constants");
const GrandmotherSengirBase = require("../setHML/GrandmotherSengir");

class GrandmotherSengir extends GrandmotherSengirBase {
  constructor(game) {
    super(game, "Grandmother Sengir", "Masters Edition II", "ME2");
  }
}

module.exports = GrandmotherSengir;
