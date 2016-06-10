"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WickerWitch extends UnimplementedCard {
  constructor (game) {
    super(game, "Wicker Witch", "Shadows over Innistrad", "SOI");
  }
}

module.exports = WickerWitch;
