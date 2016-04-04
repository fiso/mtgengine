"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HollowDogsBase = require("../setBTD/HollowDogs.js");

class HollowDogs extends HollowDogsBase {
  constructor(game) {
    super(game, "Hollow Dogs", "Ninth Edition", "9ED");
  }
}

module.exports = HollowDogs;
