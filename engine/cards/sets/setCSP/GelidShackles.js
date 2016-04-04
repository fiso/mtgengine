"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GelidShackles extends Card {
  constructor(game) {
    super(game, "Gelid Shackles", "Coldsnap", "CSP");
  }
}

module.exports = GelidShackles;
