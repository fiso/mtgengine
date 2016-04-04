"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArcheryTraining extends Card {
  constructor(game) {
    super(game, "Archery Training", "Urza's Destiny", "UDS");
  }
}

module.exports = ArcheryTraining;
