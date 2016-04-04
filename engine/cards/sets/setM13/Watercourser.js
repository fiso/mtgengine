"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Watercourser extends UnimplementedCard {
  constructor(game) {
    super(game, "Watercourser", "Magic 2013", "M13");
  }
}

module.exports = Watercourser;
