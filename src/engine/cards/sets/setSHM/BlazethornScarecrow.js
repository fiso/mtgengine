"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlazethornScarecrow extends UnimplementedCard {
  constructor (game) {
    super(game, "Blazethorn Scarecrow", "Shadowmoor", "SHM");
  }
}

module.exports = BlazethornScarecrow;
