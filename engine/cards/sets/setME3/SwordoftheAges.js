"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SwordoftheAgesBase = require("../setLEG/SwordoftheAges.js");

class SwordoftheAges extends SwordoftheAgesBase {
  constructor(game) {
    super(game, "Sword of the Ages", "Masters Edition III", "ME3");
  }
}

module.exports = SwordoftheAges;
