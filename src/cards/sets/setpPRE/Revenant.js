"use strict";
const Constants = require ("../../../Constants");
const RevenantBase = require("../setORI/Revenant");

class Revenant extends RevenantBase {
  constructor (game) {
    super(game, "Revenant", "Prerelease Events", "PPRE");
  }
}

module.exports = Revenant;
