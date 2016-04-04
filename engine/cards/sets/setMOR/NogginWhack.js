"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NogginWhack extends Card {
  constructor(game) {
    super(game, "Noggin Whack", "Morningtide", "MOR");
  }
}

module.exports = NogginWhack;
