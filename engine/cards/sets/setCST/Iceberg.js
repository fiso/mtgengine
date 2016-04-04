"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Iceberg extends UnimplementedCard {
  constructor(game) {
    super(game, "Iceberg", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = Iceberg;
