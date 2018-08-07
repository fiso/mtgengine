"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoldarenDuelist extends UnimplementedCard {
  constructor (game) {
    super(game, "Voldaren Duelist", "Shadows over Innistrad", "SOI");
  }
}

module.exports = VoldarenDuelist;
