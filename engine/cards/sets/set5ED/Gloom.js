"use strict";
const Constants = require ("../../../Constants");
const GloomBase = require("../setCED/Gloom");

class Gloom extends GloomBase {
  constructor(game) {
    super(game, "Gloom", "Fifth Edition", "5ED");
  }
}

module.exports = Gloom;
