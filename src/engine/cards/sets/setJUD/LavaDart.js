"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LavaDart extends UnimplementedCard {
  constructor (game) {
    super(game, "Lava Dart", "Judgment", "JUD");
  }
}

module.exports = LavaDart;
