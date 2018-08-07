"use strict";
const Constants = require ("../../../Constants");
const KathariBomberBase = require("../setMM3/KathariBomber");

class KathariBomber extends KathariBomberBase {
  constructor (game) {
    super(game, "Kathari Bomber", "Alara Reborn", "ARB");
  }
}

module.exports = KathariBomber;
