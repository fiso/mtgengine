"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TerraStomperBase = require("../setM15/TerraStomper.js");

class TerraStomper extends TerraStomperBase {
  constructor(game) {
    super(game, "Terra Stomper", "Magic Origins", "ORI");
  }
}

module.exports = TerraStomper;
