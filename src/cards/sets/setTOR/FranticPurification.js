"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FranticPurification extends UnimplementedCard {
  constructor(game) {
    super(game, "Frantic Purification", "Torment", "TOR");
  }
}

module.exports = FranticPurification;
