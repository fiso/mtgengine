"use strict";
const Constants = require ("../../../Constants");
const GriffinProtectorBase = require("../setA25/GriffinProtector");

class GriffinProtector extends GriffinProtectorBase {
  constructor (game) {
    super(game, "Griffin Protector", "Magic 2013", "M13");
  }
}

module.exports = GriffinProtector;
