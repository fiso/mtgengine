"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrawGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Craw Giant", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = CrawGiant;
