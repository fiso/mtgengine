"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FigureofDestinyAvatar extends UnimplementedCard {
  constructor(game) {
    super(game, "Figure of Destiny Avatar", "Vanguard", "VAN");
  }
}

module.exports = FigureofDestinyAvatar;
