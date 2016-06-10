"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MurderersAxe extends UnimplementedCard {
  constructor (game) {
    super(game, "Murderer's Axe", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MurderersAxe;
