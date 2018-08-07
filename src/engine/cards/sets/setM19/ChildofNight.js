"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChildofNight extends UnimplementedCard {
  constructor (game) {
    super(game, "Child of Night", "Core Set 2019", "M19");
  }
}

module.exports = ChildofNight;
