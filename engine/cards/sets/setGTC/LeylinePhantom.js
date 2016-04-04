"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LeylinePhantomBase = require("../setDDM/LeylinePhantom.js");

class LeylinePhantom extends LeylinePhantomBase {
  constructor(game) {
    super(game, "Leyline Phantom", "Gatecrash", "GTC");
  }
}

module.exports = LeylinePhantom;
