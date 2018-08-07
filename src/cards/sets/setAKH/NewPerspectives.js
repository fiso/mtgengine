"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NewPerspectives extends UnimplementedCard {
  constructor (game) {
    super(game, "New Perspectives", "Amonkhet", "AKH");
  }
}

module.exports = NewPerspectives;
