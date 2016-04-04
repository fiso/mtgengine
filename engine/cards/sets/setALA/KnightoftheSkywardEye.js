"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KnightoftheSkywardEye extends Card {
  constructor(game) {
    super(game, "Knight of the Skyward Eye", "Shards of Alara", "ALA");
  }
}

module.exports = KnightoftheSkywardEye;
