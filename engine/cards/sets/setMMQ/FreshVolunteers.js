"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FreshVolunteers extends UnimplementedCard {
  constructor(game) {
    super(game, "Fresh Volunteers", "Mercadian Masques", "MMQ");
  }
}

module.exports = FreshVolunteers;
