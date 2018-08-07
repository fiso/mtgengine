"use strict";
const Constants = require ("../../../Constants");
const TerraStomperBase = require("../setORI/TerraStomper");

class TerraStomper extends TerraStomperBase {
  constructor (game) {
    super(game, "Terra Stomper", "Magic 2015", "M15");
  }
}

module.exports = TerraStomper;
