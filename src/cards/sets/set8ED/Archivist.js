"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Archivist extends UnimplementedCard {
  constructor(game) {
    super(game, "Archivist", "Eighth Edition", "8ED");
  }
}

module.exports = Archivist;
