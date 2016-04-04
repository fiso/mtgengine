"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JacesArchivist extends UnimplementedCard {
  constructor(game) {
    super(game, "Jace's Archivist", "Commander 2013 Edition", "C13");
  }
}

module.exports = JacesArchivist;
