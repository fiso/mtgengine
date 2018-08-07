"use strict";
const Constants = require ("../../../Constants");
const CloudstoneCurioBase = require("../setMPS/CloudstoneCurio");

class CloudstoneCurio extends CloudstoneCurioBase {
  constructor (game) {
    super(game, "Cloudstone Curio", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = CloudstoneCurio;
