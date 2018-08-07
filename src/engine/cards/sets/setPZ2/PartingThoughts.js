"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PartingThoughts extends UnimplementedCard {
  constructor (game) {
    super(game, "Parting Thoughts", "You Make the Cube", "PZ2");
  }
}

module.exports = PartingThoughts;
