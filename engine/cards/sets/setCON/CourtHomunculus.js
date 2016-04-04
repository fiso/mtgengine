"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CourtHomunculus extends Card {
  constructor(game) {
    super(game, "Court Homunculus", "Conflux", "CON");
  }
}

module.exports = CourtHomunculus;
