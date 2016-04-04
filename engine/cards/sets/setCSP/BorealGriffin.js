"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BorealGriffin extends Card {
  constructor(game) {
    super(game, "Boreal Griffin", "Coldsnap", "CSP");
  }
}

module.exports = BorealGriffin;
