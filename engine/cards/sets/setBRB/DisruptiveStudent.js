"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DisruptiveStudent extends UnimplementedCard {
  constructor(game) {
    super(game, "Disruptive Student", "Battle Royale Box Set", "BRB");
  }
}

module.exports = DisruptiveStudent;
