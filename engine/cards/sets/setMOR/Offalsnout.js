"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Offalsnout extends Card {
  constructor(game) {
    super(game, "Offalsnout", "Morningtide", "MOR");
  }
}

module.exports = Offalsnout;
