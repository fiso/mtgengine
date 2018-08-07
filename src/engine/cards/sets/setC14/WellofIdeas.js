"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WellofIdeas extends UnimplementedCard {
  constructor (game) {
    super(game, "Well of Ideas", "Commander 2014", "C14");
  }
}

module.exports = WellofIdeas;
