"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TellingTime extends UnimplementedCard {
  constructor (game) {
    super(game, "Telling Time", "Commander 2018", "C18");
  }
}

module.exports = TellingTime;
