"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Helionaut extends UnimplementedCard {
  constructor (game) {
    super(game, "Helionaut", "Apocalypse", "APC");
  }
}

module.exports = Helionaut;
