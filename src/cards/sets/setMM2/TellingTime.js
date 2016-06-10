"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TellingTime extends UnimplementedCard {
  constructor (game) {
    super(game, "Telling Time", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = TellingTime;
