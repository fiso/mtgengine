"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MilitantMonk extends Card {
  constructor(game) {
    super(game, "Militant Monk", "Torment", "TOR");
  }
}

module.exports = MilitantMonk;
