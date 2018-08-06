"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoneRider extends UnimplementedCard {
  constructor (game) {
    super(game, "Lone Rider", "Eldritch Moon", "EMN");
  }
}

module.exports = LoneRider;
