"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThunderThrashElderBase = require("../setPC2/ThunderThrashElder.js");

class ThunderThrashElder extends ThunderThrashElderBase {
  constructor(game) {
    super(game, "Thunder-Thrash Elder", "Shards of Alara", "ALA");
  }
}

module.exports = ThunderThrashElder;
