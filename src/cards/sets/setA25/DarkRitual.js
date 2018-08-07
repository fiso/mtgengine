"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkRitual extends UnimplementedCard {
  constructor (game) {
    super(game, "Dark Ritual", "Masters 25", "A25");
  }
}

module.exports = DarkRitual;
