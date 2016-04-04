"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SwordofFeastandFamineBase = require("../setpJGP/SwordofFeastandFamine.js");

class SwordofFeastandFamine extends SwordofFeastandFamineBase {
  constructor(game) {
    super(game, "Sword of Feast and Famine", "Mirrodin Besieged", "MBS");
  }
}

module.exports = SwordofFeastandFamine;
