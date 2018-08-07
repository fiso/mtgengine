"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HolyDay extends UnimplementedCard {
  constructor (game) {
    super(game, "Holy Day", "Tenth Edition", "10E");
  }
}

module.exports = HolyDay;
