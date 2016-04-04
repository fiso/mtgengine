"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VineSnare extends UnimplementedCard {
  constructor(game) {
    super(game, "Vine Snare", "Magic Origins", "ORI");
  }
}

module.exports = VineSnare;
