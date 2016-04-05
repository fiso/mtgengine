"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScornedVillager extends UnimplementedCard {
  constructor(game) {
    super(game, "Scorned Villager", "Dark Ascension", "DKA");
  }
}

module.exports = ScornedVillager;
