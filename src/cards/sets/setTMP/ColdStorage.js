"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ColdStorage extends UnimplementedCard {
  constructor (game) {
    super(game, "Cold Storage", "Tempest", "TMP");
  }
}

module.exports = ColdStorage;
