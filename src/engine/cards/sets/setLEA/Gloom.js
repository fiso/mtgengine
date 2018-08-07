"use strict";
const Constants = require ("../../../Constants");
const GloomBase = require("../setME4/Gloom");

class Gloom extends GloomBase {
  constructor (game) {
    super(game, "Gloom", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Gloom;
