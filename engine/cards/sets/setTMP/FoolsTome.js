"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FoolsTome extends UnimplementedCard {
  constructor(game) {
    super(game, "Fool's Tome", "Tempest", "TMP");
  }
}

module.exports = FoolsTome;
