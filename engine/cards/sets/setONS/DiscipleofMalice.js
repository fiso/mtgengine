"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DiscipleofMalice extends Card {
  constructor(game) {
    super(game, "Disciple of Malice", "Onslaught", "ONS");
  }
}

module.exports = DiscipleofMalice;
