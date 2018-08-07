"use strict";
const Constants = require ("../../../Constants");
const SwordofKaldraBase = require("../setMRD/SwordofKaldra");

class SwordofKaldra extends SwordofKaldraBase {
  constructor (game) {
    super(game, "Sword of Kaldra", "Magic Online Promos", "PRM");
  }
}

module.exports = SwordofKaldra;
