"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YukorathePrisoner extends UnimplementedCard {
  constructor(game) {
    super(game, "Yukora, the Prisoner", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = YukorathePrisoner;
