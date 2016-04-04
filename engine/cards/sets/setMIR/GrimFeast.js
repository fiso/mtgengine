"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrimFeast extends Card {
  constructor(game) {
    super(game, "Grim Feast", "Mirage", "MIR");
  }
}

module.exports = GrimFeast;
