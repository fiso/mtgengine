"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishChampionAvatar extends UnimplementedCard {
  constructor(game) {
    super(game, "Elvish Champion Avatar", "Vanguard", "VAN");
  }
}

module.exports = ElvishChampionAvatar;
