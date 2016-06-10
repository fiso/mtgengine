"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirrisGuile extends UnimplementedCard {
  constructor (game) {
    super(game, "Mirri's Guile", "Tempest", "TMP");
  }
}

module.exports = MirrisGuile;
