"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesperateStand extends UnimplementedCard {
  constructor (game) {
    super(game, "Desperate Stand", "Journey into Nyx", "JOU");
  }
}

module.exports = DesperateStand;
