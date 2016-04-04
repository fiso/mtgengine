"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Havoc extends UnimplementedCard {
  constructor(game) {
    super(game, "Havoc", "Tempest", "TMP");
  }
}

module.exports = Havoc;
