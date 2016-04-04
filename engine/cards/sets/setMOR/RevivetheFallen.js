"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RevivetheFallen extends Card {
  constructor(game) {
    super(game, "Revive the Fallen", "Morningtide", "MOR");
  }
}

module.exports = RevivetheFallen;
