"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurrGrafter extends UnimplementedCard {
  constructor(game) {
    super(game, "Burr Grafter", "Champions of Kamigawa", "CHK");
  }
}

module.exports = BurrGrafter;
