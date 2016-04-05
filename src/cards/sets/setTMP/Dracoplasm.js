"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dracoplasm extends UnimplementedCard {
  constructor(game) {
    super(game, "Dracoplasm", "Tempest", "TMP");
  }
}

module.exports = Dracoplasm;
