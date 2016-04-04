"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkaabGoliathBase = require("../setISD/SkaabGoliath.js");

class SkaabGoliath extends SkaabGoliathBase {
  constructor(game) {
    super(game, "Skaab Goliath", "Magic Origins", "ORI");
  }
}

module.exports = SkaabGoliath;
