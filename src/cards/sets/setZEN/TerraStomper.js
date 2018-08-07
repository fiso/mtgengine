"use strict";
const Constants = require ("../../../Constants");
const TerraStomperBase = require("../setORI/TerraStomper");

class TerraStomper extends TerraStomperBase {
  constructor (game) {
    super(game, "Terra Stomper", "Zendikar", "ZEN");
  }
}

module.exports = TerraStomper;
