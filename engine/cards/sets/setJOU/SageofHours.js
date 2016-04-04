"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SageofHours extends UnimplementedCard {
  constructor(game) {
    super(game, "Sage of Hours", "Journey into Nyx", "JOU");
  }
}

module.exports = SageofHours;
