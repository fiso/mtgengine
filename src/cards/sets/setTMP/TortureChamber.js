"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TortureChamber extends UnimplementedCard {
  constructor(game) {
    super(game, "Torture Chamber", "Tempest", "TMP");
  }
}

module.exports = TortureChamber;
