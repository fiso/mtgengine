"use strict";
const Constants = require ("../../../Constants");
const FogBase = require("../setEMA/Fog");

class Fog extends FogBase {
  constructor (game) {
    super(game, "Fog", "Magic 2012", "M12");
  }
}

module.exports = Fog;
