"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TalruumChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "Talruum Champion", "Visions", "VIS");
  }
}

module.exports = TalruumChampion;
