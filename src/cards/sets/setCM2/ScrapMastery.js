"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScrapMastery extends UnimplementedCard {
  constructor (game) {
    super(game, "Scrap Mastery", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = ScrapMastery;
