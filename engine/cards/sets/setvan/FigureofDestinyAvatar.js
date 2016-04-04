"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FigureofDestinyAvatar extends Card {
  constructor(game) {
    super(game, "Figure of Destiny Avatar", "Vanguard", "VAN");
  }
}

module.exports = FigureofDestinyAvatar;
