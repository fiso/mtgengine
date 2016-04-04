"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoltariMonk extends Card {
  constructor(game) {
    super(game, "Soltari Monk", "Tempest", "TMP");
  }
}

module.exports = SoltariMonk;
