"use strict";
const Constants = require ("../../../Constants");
const IvyLaneDenizenBase = require("../setDDU/IvyLaneDenizen");

class IvyLaneDenizen extends IvyLaneDenizenBase {
  constructor (game) {
    super(game, "Ivy Lane Denizen", "Gatecrash", "GTC");
  }
}

module.exports = IvyLaneDenizen;
