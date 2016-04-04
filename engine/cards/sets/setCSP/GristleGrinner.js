"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GristleGrinner extends Card {
  constructor(game) {
    super(game, "Gristle Grinner", "Coldsnap", "CSP");
  }
}

module.exports = GristleGrinner;
