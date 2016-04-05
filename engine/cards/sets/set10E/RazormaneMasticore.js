"use strict";
const Constants = require ("../../../Constants");
const RazormaneMasticoreBase = require("../setDDF/RazormaneMasticore");

class RazormaneMasticore extends RazormaneMasticoreBase {
  constructor(game) {
    super(game, "Razormane Masticore", "Tenth Edition", "10E");
  }
}

module.exports = RazormaneMasticore;
