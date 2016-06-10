"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightofDusk extends UnimplementedCard {
  constructor (game) {
    super(game, "Knight of Dusk", "Tempest", "TMP");
  }
}

module.exports = KnightofDusk;
