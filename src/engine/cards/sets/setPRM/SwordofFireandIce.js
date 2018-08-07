"use strict";
const Constants = require ("../../../Constants");
const SwordofFireandIceBase = require("../setMPS/SwordofFireandIce");

class SwordofFireandIce extends SwordofFireandIceBase {
  constructor (game) {
    super(game, "Sword of Fire and Ice", "Magic Online Promos", "PRM");
  }
}

module.exports = SwordofFireandIce;
