"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OdiousTrow extends UnimplementedCard {
  constructor (game) {
    super(game, "Odious Trow", "Eventide", "EVE");
  }
}

module.exports = OdiousTrow;
