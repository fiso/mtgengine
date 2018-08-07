"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Archivist extends UnimplementedCard {
  constructor (game) {
    super(game, "Archivist", "Ninth Edition", "9ED");
  }
}

module.exports = Archivist;
