"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhantasmalSphere extends Card {
  constructor(game) {
    super(game, "Phantasmal Sphere", "Alliances", "ALL");
  }
}

module.exports = PhantasmalSphere;
