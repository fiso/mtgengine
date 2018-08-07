"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JungleDelver extends UnimplementedCard {
  constructor (game) {
    super(game, "Jungle Delver", "Ixalan", "XLN");
  }
}

module.exports = JungleDelver;
