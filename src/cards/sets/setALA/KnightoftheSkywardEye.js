"use strict";
const Constants = require ("../../../Constants");
const KnightoftheSkywardEyeBase = require("../setA25/KnightoftheSkywardEye");

class KnightoftheSkywardEye extends KnightoftheSkywardEyeBase {
  constructor (game) {
    super(game, "Knight of the Skyward Eye", "Shards of Alara", "ALA");
  }
}

module.exports = KnightoftheSkywardEye;
