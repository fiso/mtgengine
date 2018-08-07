"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WatchwingScarecrow extends UnimplementedCard {
  constructor (game) {
    super(game, "Watchwing Scarecrow", "Shadowmoor", "SHM");
  }
}

module.exports = WatchwingScarecrow;
