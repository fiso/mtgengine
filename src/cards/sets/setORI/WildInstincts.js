"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildInstincts extends UnimplementedCard {
  constructor (game) {
    super(game, "Wild Instincts", "Magic Origins", "ORI");
  }
}

module.exports = WildInstincts;
