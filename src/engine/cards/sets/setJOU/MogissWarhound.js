"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MogissWarhound extends UnimplementedCard {
  constructor (game) {
    super(game, "Mogis's Warhound", "Journey into Nyx", "JOU");
  }
}

module.exports = MogissWarhound;
