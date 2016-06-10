"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScissorsLizard extends UnimplementedCard {
  constructor (game) {
    super(game, "Scissors Lizard", "Unglued", "UGL");
  }
}

module.exports = ScissorsLizard;
