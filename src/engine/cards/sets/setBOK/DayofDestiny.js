"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DayofDestiny extends UnimplementedCard {
  constructor (game) {
    super(game, "Day of Destiny", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = DayofDestiny;
