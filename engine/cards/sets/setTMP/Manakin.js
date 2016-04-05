"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Manakin extends UnimplementedCard {
  constructor(game) {
    super(game, "Manakin", "Tempest", "TMP");
  }
}

module.exports = Manakin;
