"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HideousLaughter extends UnimplementedCard {
  constructor(game) {
    super(game, "Hideous Laughter", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HideousLaughter;
