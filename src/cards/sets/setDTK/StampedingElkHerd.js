"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StampedingElkHerd extends UnimplementedCard {
  constructor(game) {
    super(game, "Stampeding Elk Herd", "Dragons of Tarkir", "DTK");
  }
}

module.exports = StampedingElkHerd;
