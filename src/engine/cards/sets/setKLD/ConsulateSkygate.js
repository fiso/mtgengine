"use strict";
const Constants = require ("../../../Constants");
const ConsulateSkygateBase = require("../setBBD/ConsulateSkygate");

class ConsulateSkygate extends ConsulateSkygateBase {
  constructor (game) {
    super(game, "Consulate Skygate", "Kaladesh", "KLD");
  }
}

module.exports = ConsulateSkygate;
