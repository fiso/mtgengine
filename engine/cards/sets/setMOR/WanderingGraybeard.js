"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WanderingGraybeard extends Card {
  constructor(game) {
    super(game, "Wandering Graybeard", "Morningtide", "MOR");
  }
}

module.exports = WanderingGraybeard;
