"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SwordofBodyandMindBase = require("../setV10/SwordofBodyandMind.js");

class SwordofBodyandMind extends SwordofBodyandMindBase {
  constructor(game) {
    super(game, "Sword of Body and Mind", "Scars of Mirrodin", "SOM");
  }
}

module.exports = SwordofBodyandMind;
