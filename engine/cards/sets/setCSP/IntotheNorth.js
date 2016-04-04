"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IntotheNorth extends Card {
  constructor(game) {
    super(game, "Into the North", "Coldsnap", "CSP");
  }
}

module.exports = IntotheNorth;
