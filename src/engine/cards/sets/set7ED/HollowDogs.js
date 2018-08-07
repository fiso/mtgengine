"use strict";
const Constants = require ("../../../Constants");
const HollowDogsBase = require("../set9ED/HollowDogs");

class HollowDogs extends HollowDogsBase {
  constructor (game) {
    super(game, "Hollow Dogs", "Seventh Edition", "7ED");
  }
}

module.exports = HollowDogs;
