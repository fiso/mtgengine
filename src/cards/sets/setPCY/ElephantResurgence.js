"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElephantResurgence extends UnimplementedCard {
  constructor (game) {
    super(game, "Elephant Resurgence", "Prophecy", "PCY");
  }
}

module.exports = ElephantResurgence;
