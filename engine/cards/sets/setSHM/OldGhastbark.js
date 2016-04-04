"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OldGhastbark extends UnimplementedCard {
  constructor(game) {
    super(game, "Old Ghastbark", "Shadowmoor", "SHM");
  }
}

module.exports = OldGhastbark;
