"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mobilization extends UnimplementedCard {
  constructor(game) {
    super(game, "Mobilization", "Commander 2014", "C14");
  }
}

module.exports = Mobilization;
