"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScrapMastery extends UnimplementedCard {
  constructor (game) {
    super(game, "Scrap Mastery", "Commander 2014", "C14");
  }
}

module.exports = ScrapMastery;
