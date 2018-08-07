"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimeStop extends UnimplementedCard {
  constructor (game) {
    super(game, "Time Stop", "Tenth Edition", "10E");
  }
}

module.exports = TimeStop;
