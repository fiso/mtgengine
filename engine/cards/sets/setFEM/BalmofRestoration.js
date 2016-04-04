"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BalmofRestoration extends Card {
  constructor(game) {
    super(game, "Balm of Restoration", "Fallen Empires", "FEM");
  }
}

module.exports = BalmofRestoration;
