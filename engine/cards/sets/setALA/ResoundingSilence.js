"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ResoundingSilence extends Card {
  constructor(game) {
    super(game, "Resounding Silence", "Shards of Alara", "ALA");
  }
}

module.exports = ResoundingSilence;
