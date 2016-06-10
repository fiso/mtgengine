"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeizetheDay extends UnimplementedCard {
  constructor (game) {
    super(game, "Seize the Day", "Odyssey", "ODY");
  }
}

module.exports = SeizetheDay;
