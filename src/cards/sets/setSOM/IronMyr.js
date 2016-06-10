"use strict";
const Constants = require ("../../../Constants");
const IronMyrBase = require("../setMRD/IronMyr");

class IronMyr extends IronMyrBase {
  constructor (game) {
    super(game, "Iron Myr", "Scars of Mirrodin", "SOM");
  }
}

module.exports = IronMyr;
