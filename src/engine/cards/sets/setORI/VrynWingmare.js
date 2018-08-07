"use strict";
const Constants = require ("../../../Constants");
const VrynWingmareBase = require("../setPORI/VrynWingmare");

class VrynWingmare extends VrynWingmareBase {
  constructor (game) {
    super(game, "Vryn Wingmare", "Magic Origins", "ORI");
  }
}

module.exports = VrynWingmare;
