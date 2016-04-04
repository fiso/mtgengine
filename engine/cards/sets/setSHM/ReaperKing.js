"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReaperKing extends Card {
  constructor(game) {
    super(game, "Reaper King", "Shadowmoor", "SHM");
  }
}

module.exports = ReaperKing;
