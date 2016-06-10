"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WalktheAeons extends UnimplementedCard {
  constructor (game) {
    super(game, "Walk the Aeons", "Time Spiral", "TSP");
  }
}

module.exports = WalktheAeons;
