"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FirstComeFirstServed extends UnimplementedCard {
  constructor(game) {
    super(game, "First Come, First Served", "Unhinged", "UNH");
  }
}

module.exports = FirstComeFirstServed;
