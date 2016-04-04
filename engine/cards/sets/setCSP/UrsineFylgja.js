"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UrsineFylgja extends Card {
  constructor(game) {
    super(game, "Ursine Fylgja", "Coldsnap", "CSP");
  }
}

module.exports = UrsineFylgja;
