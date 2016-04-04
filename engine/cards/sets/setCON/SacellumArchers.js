"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SacellumArchers extends Card {
  constructor(game) {
    super(game, "Sacellum Archers", "Conflux", "CON");
  }
}

module.exports = SacellumArchers;
