"use strict";
const Constants = require ("../../../Constants");
const SkaabGoliathBase = require("../setISD/SkaabGoliath");

class SkaabGoliath extends SkaabGoliathBase {
  constructor(game) {
    super(game, "Skaab Goliath", "Magic Origins", "ORI");
  }
}

module.exports = SkaabGoliath;
