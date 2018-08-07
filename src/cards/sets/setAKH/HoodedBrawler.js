"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HoodedBrawler extends UnimplementedCard {
  constructor (game) {
    super(game, "Hooded Brawler", "Amonkhet", "AKH");
  }
}

module.exports = HoodedBrawler;
