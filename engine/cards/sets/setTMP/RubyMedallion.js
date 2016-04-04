"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RubyMedallionBase = require("../setC14/RubyMedallion.js");

class RubyMedallion extends RubyMedallionBase {
  constructor(game) {
    super(game, "Ruby Medallion", "Tempest", "TMP");
  }
}

module.exports = RubyMedallion;
