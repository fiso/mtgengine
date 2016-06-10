"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraveRobbers extends UnimplementedCard {
  constructor (game) {
    super(game, "Grave Robbers", "The Dark", "DRK");
  }
}

module.exports = GraveRobbers;
