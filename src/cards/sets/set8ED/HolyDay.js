"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HolyDay extends UnimplementedCard {
  constructor (game) {
    super(game, "Holy Day", "Eighth Edition", "8ED");
  }
}

module.exports = HolyDay;
