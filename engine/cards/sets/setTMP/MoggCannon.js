"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoggCannon extends UnimplementedCard {
  constructor(game) {
    super(game, "Mogg Cannon", "Tempest", "TMP");
  }
}

module.exports = MoggCannon;
