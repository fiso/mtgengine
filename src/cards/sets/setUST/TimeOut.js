"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimeOut extends UnimplementedCard {
  constructor (game) {
    super(game, "Time Out", "Unstable", "UST");
  }
}

module.exports = TimeOut;
