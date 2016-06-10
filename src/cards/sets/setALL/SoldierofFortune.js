"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoldierofFortune extends UnimplementedCard {
  constructor (game) {
    super(game, "Soldier of Fortune", "Alliances", "ALL");
  }
}

module.exports = SoldierofFortune;
