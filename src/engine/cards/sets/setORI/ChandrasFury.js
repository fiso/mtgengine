"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChandrasFury extends UnimplementedCard {
  constructor (game) {
    super(game, "Chandra's Fury", "Magic Origins", "ORI");
  }
}

module.exports = ChandrasFury;
