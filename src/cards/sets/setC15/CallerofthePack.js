"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CallerofthePack extends UnimplementedCard {
  constructor (game) {
    super(game, "Caller of the Pack", "Commander 2015", "C15");
  }
}

module.exports = CallerofthePack;
