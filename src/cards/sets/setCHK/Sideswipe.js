"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sideswipe extends UnimplementedCard {
  constructor(game) {
    super(game, "Sideswipe", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Sideswipe;
