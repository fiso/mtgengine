"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AurochsHerd extends UnimplementedCard {
  constructor(game) {
    super(game, "Aurochs Herd", "Coldsnap", "CSP");
  }
}

module.exports = AurochsHerd;
