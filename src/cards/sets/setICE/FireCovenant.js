"use strict";
const Constants = require ("../../../Constants");
const FireCovenantBase = require("../setMED/FireCovenant");

class FireCovenant extends FireCovenantBase {
  constructor (game) {
    super(game, "Fire Covenant", "Ice Age", "ICE");
  }
}

module.exports = FireCovenant;
