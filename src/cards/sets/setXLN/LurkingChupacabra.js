"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LurkingChupacabra extends UnimplementedCard {
  constructor (game) {
    super(game, "Lurking Chupacabra", "Ixalan", "XLN");
  }
}

module.exports = LurkingChupacabra;
