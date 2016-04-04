"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Arachnoid extends Card {
  constructor(game) {
    super(game, "Arachnoid", "Fifth Dawn", "5DN");
  }
}

module.exports = Arachnoid;
