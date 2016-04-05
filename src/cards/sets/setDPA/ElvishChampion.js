"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishChampion extends UnimplementedCard {
  constructor(game) {
    super(game, "Elvish Champion", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = ElvishChampion;
