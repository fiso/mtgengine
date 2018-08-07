"use strict";
const Constants = require ("../../../Constants");
const ReleasetotheWindBase = require("../setPRIX/ReleasetotheWind");

class ReleasetotheWind extends ReleasetotheWindBase {
  constructor (game) {
    super(game, "Release to the Wind", "Rivals of Ixalan", "RIX");
  }
}

module.exports = ReleasetotheWind;
