"use strict";
const Constants = require ("../../../Constants");
const MolimoMaroSorcererBase = require("../setARC/MolimoMaroSorcerer");

class MolimoMaroSorcerer extends MolimoMaroSorcererBase {
  constructor(game) {
    super(game, "Molimo, Maro-Sorcerer", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = MolimoMaroSorcerer;
