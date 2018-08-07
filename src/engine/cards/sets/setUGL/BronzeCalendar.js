"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BronzeCalendar extends UnimplementedCard {
  constructor (game) {
    super(game, "Bronze Calendar", "Unglued", "UGL");
  }
}

module.exports = BronzeCalendar;
