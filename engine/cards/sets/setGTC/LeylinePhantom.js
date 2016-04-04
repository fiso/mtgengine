"use strict";
const Constants = require ("../../../Constants");
const LeylinePhantomBase = require("../setDDM/LeylinePhantom");

class LeylinePhantom extends LeylinePhantomBase {
  constructor(game) {
    super(game, "Leyline Phantom", "Gatecrash", "GTC");
  }
}

module.exports = LeylinePhantom;
