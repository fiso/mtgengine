"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LordWindgrace extends UnimplementedCard {
  constructor (game) {
    super(game, "Lord Windgrace", "Commander 2018", "C18");
  }
}

module.exports = LordWindgrace;
