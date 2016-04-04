"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DrafnasRestoration extends Card {
  constructor(game) {
    super(game, "Drafna's Restoration", "Antiquities", "ATQ");
  }
}

module.exports = DrafnasRestoration;
