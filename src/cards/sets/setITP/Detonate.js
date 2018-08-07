"use strict";
const Constants = require ("../../../Constants");
const DetonateBase = require("../setME4/Detonate");

class Detonate extends DetonateBase {
  constructor (game) {
    super(game, "Detonate", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = Detonate;
