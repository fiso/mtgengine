"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MolimoMaroSorcererBase = require("../setARC/MolimoMaroSorcerer.js");

class MolimoMaroSorcerer extends MolimoMaroSorcererBase {
  constructor(game) {
    super(game, "Molimo, Maro-Sorcerer", "Tenth Edition", "10E");
  }
}

module.exports = MolimoMaroSorcerer;
