"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InertiaBubble extends UnimplementedCard {
  constructor (game) {
    super(game, "Inertia Bubble", "Mirrodin", "MRD");
  }
}

module.exports = InertiaBubble;
