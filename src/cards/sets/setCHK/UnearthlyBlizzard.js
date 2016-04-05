"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnearthlyBlizzard extends UnimplementedCard {
  constructor(game) {
    super(game, "Unearthly Blizzard", "Champions of Kamigawa", "CHK");
  }
}

module.exports = UnearthlyBlizzard;
