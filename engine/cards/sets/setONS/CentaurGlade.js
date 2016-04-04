"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CentaurGlade extends Card {
  constructor(game) {
    super(game, "Centaur Glade", "Onslaught", "ONS");
  }
}

module.exports = CentaurGlade;
