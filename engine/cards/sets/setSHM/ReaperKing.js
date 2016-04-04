"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReaperKing extends UnimplementedCard {
  constructor(game) {
    super(game, "Reaper King", "Shadowmoor", "SHM");
  }
}

module.exports = ReaperKing;
