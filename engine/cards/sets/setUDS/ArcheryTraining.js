"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcheryTraining extends UnimplementedCard {
  constructor(game) {
    super(game, "Archery Training", "Urza's Destiny", "UDS");
  }
}

module.exports = ArcheryTraining;
