"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BorealShelf extends Card {
  constructor(game) {
    super(game, "Boreal Shelf", "Coldsnap", "CSP");
  }
}

module.exports = BorealShelf;
