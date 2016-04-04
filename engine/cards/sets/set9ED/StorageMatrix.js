"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StorageMatrix extends Card {
  constructor(game) {
    super(game, "Storage Matrix", "Ninth Edition", "9ED");
  }
}

module.exports = StorageMatrix;
