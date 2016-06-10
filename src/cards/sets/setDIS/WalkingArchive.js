"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WalkingArchive extends UnimplementedCard {
  constructor (game) {
    super(game, "Walking Archive", "Dissension", "DIS");
  }
}

module.exports = WalkingArchive;
