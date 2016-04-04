"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrapeshotCatapult extends Card {
  constructor(game) {
    super(game, "Grapeshot Catapult", "Antiquities", "ATQ");
  }
}

module.exports = GrapeshotCatapult;
