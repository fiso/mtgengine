"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShieldSphere extends Card {
  constructor(game) {
    super(game, "Shield Sphere", "Alliances", "ALL");
  }
}

module.exports = ShieldSphere;
