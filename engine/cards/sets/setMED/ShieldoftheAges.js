"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShieldoftheAgesBase = require("../setICE/ShieldoftheAges.js");

class ShieldoftheAges extends ShieldoftheAgesBase {
  constructor(game) {
    super(game, "Shield of the Ages", "Masters Edition", "MED");
  }
}

module.exports = ShieldoftheAges;
