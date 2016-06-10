"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GnarledEffigy extends UnimplementedCard {
  constructor (game) {
    super(game, "Gnarled Effigy", "Shadowmoor", "SHM");
  }
}

module.exports = GnarledEffigy;
