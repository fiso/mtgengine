"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AdarkarWastes extends Card {
  constructor(game) {
    super(game, "Adarkar Wastes", "Classic Sixth Edition", "6ED");
  }
}

module.exports = AdarkarWastes;
