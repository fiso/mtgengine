"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HollowDogsBase = require("../setBTD/HollowDogs.js");

class HollowDogs extends HollowDogsBase {
  constructor(game) {
    super(game, "Hollow Dogs", "Starter 1999", "S99");
  }
}

module.exports = HollowDogs;
