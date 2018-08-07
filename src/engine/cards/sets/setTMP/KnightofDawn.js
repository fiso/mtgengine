"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightofDawn extends UnimplementedCard {
  constructor (game) {
    super(game, "Knight of Dawn", "Tempest", "TMP");
  }
}

module.exports = KnightofDawn;
