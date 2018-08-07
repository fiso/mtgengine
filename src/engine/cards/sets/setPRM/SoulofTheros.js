"use strict";
const Constants = require ("../../../Constants");
const SoulofTherosBase = require("../setM15/SoulofTheros");

class SoulofTheros extends SoulofTherosBase {
  constructor (game) {
    super(game, "Soul of Theros", "Magic Online Promos", "PRM");
  }
}

module.exports = SoulofTheros;
