"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhoWhatWhenWhereWhy extends UnimplementedCard {
  constructor (game) {
    super(game, "Who // What // When // Where // Why", "Unhinged", "UNH");
  }
}

module.exports = WhoWhatWhenWhereWhy;
