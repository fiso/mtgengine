"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForceAway extends UnimplementedCard {
  constructor (game) {
    super(game, "Force Away", "Khans of Tarkir", "KTK");
  }
}

module.exports = ForceAway;
