"use strict";
const Constants = require ("../../../Constants");
const HollowDogsBase = require("../setBTD/HollowDogs");

class HollowDogs extends HollowDogsBase {
  constructor (game) {
    super(game, "Hollow Dogs", "Urza's Saga", "USG");
  }
}

module.exports = HollowDogs;
