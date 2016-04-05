"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Energizer extends UnimplementedCard {
  constructor(game) {
    super(game, "Energizer", "Tempest", "TMP");
  }
}

module.exports = Energizer;
