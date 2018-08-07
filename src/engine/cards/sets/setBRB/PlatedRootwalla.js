"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlatedRootwalla extends UnimplementedCard {
  constructor (game) {
    super(game, "Plated Rootwalla", "Battle Royale Box Set", "BRB");
  }
}

module.exports = PlatedRootwalla;
