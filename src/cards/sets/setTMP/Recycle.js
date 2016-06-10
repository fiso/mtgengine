"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Recycle extends UnimplementedCard {
  constructor (game) {
    super(game, "Recycle", "Tempest", "TMP");
  }
}

module.exports = Recycle;
