"use strict";
const Constants = require ("../../../Constants");
const GloomBase = require("../setCED/Gloom");

class Gloom extends GloomBase {
  constructor (game) {
    super(game, "Gloom", "Masters Edition IV", "ME4");
  }
}

module.exports = Gloom;
