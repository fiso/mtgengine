"use strict";
const Constants = require ("../../../Constants");
const RubyMedallionBase = require("../setCM2/RubyMedallion");

class RubyMedallion extends RubyMedallionBase {
  constructor (game) {
    super(game, "Ruby Medallion", "Tempest", "TMP");
  }
}

module.exports = RubyMedallion;
