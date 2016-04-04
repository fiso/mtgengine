"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RazormaneMasticoreBase = require("../setDDF/RazormaneMasticore.js");

class RazormaneMasticore extends RazormaneMasticoreBase {
  constructor(game) {
    super(game, "Razormane Masticore", "Tenth Edition", "10E");
  }
}

module.exports = RazormaneMasticore;
