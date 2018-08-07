"use strict";
const Constants = require ("../../../Constants");
const TerraStomperBase = require("../setORI/TerraStomper");

class TerraStomper extends TerraStomperBase {
  constructor (game) {
    super(game, "Terra Stomper", "Magic Online Promos", "PRM");
  }
}

module.exports = TerraStomper;
