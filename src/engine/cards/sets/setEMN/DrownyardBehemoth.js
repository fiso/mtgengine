"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrownyardBehemoth extends UnimplementedCard {
  constructor (game) {
    super(game, "Drownyard Behemoth", "Eldritch Moon", "EMN");
  }
}

module.exports = DrownyardBehemoth;
