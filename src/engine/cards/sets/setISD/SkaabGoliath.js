"use strict";
const Constants = require ("../../../Constants");
const SkaabGoliathBase = require("../setORI/SkaabGoliath");

class SkaabGoliath extends SkaabGoliathBase {
  constructor (game) {
    super(game, "Skaab Goliath", "Innistrad", "ISD");
  }
}

module.exports = SkaabGoliath;
