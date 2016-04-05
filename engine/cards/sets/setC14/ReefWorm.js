"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReefWorm extends UnimplementedCard {
  constructor(game) {
    super(game, "Reef Worm", "Commander 2014", "C14");
  }
}

module.exports = ReefWorm;
