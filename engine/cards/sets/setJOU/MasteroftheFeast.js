"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasteroftheFeast extends UnimplementedCard {
  constructor(game) {
    super(game, "Master of the Feast", "Journey into Nyx", "JOU");
  }
}

module.exports = MasteroftheFeast;
