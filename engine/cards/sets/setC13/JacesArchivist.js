"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JacesArchivist extends Card {
  constructor(game) {
    super(game, "Jace's Archivist", "Commander 2013 Edition", "C13");
  }
}

module.exports = JacesArchivist;
