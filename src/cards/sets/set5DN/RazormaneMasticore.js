"use strict";
const Constants = require ("../../../Constants");
const RazormaneMasticoreBase = require("../setDDF/RazormaneMasticore");

class RazormaneMasticore extends RazormaneMasticoreBase {
  constructor (game) {
    super(game, "Razormane Masticore", "Fifth Dawn", "5DN");
  }
}

module.exports = RazormaneMasticore;
