"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ObeliskofUndoing extends UnimplementedCard {
  constructor (game) {
    super(game, "Obelisk of Undoing", "Masters Edition IV", "ME4");
  }
}

module.exports = ObeliskofUndoing;
