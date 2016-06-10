"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightoftheSkywardEye extends UnimplementedCard {
  constructor (game) {
    super(game, "Knight of the Skyward Eye", "Shards of Alara", "ALA");
  }
}

module.exports = KnightoftheSkywardEye;
