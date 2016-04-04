"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StorageMatrix extends UnimplementedCard {
  constructor(game) {
    super(game, "Storage Matrix", "Ninth Edition", "9ED");
  }
}

module.exports = StorageMatrix;
