"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScryingSheets extends Card {
  constructor(game) {
    super(game, "Scrying Sheets", "Coldsnap", "CSP");
  }
}

module.exports = ScryingSheets;
