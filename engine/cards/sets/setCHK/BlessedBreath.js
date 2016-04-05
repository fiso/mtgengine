"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlessedBreath extends UnimplementedCard {
  constructor(game) {
    super(game, "Blessed Breath", "Champions of Kamigawa", "CHK");
  }
}

module.exports = BlessedBreath;
