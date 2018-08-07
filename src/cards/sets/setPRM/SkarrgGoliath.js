"use strict";
const Constants = require ("../../../Constants");
const SkarrgGoliathBase = require("../setGTC/SkarrgGoliath");

class SkarrgGoliath extends SkarrgGoliathBase {
  constructor (game) {
    super(game, "Skarrg Goliath", "Magic Online Promos", "PRM");
  }
}

module.exports = SkarrgGoliath;
