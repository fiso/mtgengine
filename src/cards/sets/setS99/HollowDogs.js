"use strict";
const Constants = require ("../../../Constants");
const HollowDogsBase = require("../setBTD/HollowDogs");

class HollowDogs extends HollowDogsBase {
  constructor (game) {
    super(game, "Hollow Dogs", "Starter 1999", "S99");
  }
}

module.exports = HollowDogs;
