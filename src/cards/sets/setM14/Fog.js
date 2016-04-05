"use strict";
const Constants = require ("../../../Constants");
const FogBase = require("../setARC/Fog");

class Fog extends FogBase {
  constructor(game) {
    super(game, "Fog", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Fog;
