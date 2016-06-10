"use strict";
const Constants = require ("../../../Constants");
const HollowDogsBase = require("../setBTD/HollowDogs");

class HollowDogs extends HollowDogsBase {
  constructor (game) {
    super(game, "Hollow Dogs", "Ninth Edition", "9ED");
  }
}

module.exports = HollowDogs;
