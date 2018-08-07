"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NebelgastHerald extends UnimplementedCard {
  constructor (game) {
    super(game, "Nebelgast Herald", "Eldritch Moon", "EMN");
  }
}

module.exports = NebelgastHerald;
