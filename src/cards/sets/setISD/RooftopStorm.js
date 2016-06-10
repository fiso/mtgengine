"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RooftopStorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Rooftop Storm", "Innistrad", "ISD");
  }
}

module.exports = RooftopStorm;
