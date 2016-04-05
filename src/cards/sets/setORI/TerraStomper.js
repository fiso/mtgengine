"use strict";
const Constants = require ("../../../Constants");
const TerraStomperBase = require("../setM15/TerraStomper");

class TerraStomper extends TerraStomperBase {
  constructor(game) {
    super(game, "Terra Stomper", "Magic Origins", "ORI");
  }
}

module.exports = TerraStomper;
