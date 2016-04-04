"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofVapor extends Card {
  constructor(game) {
    super(game, "Wall of Vapor", "Chronicles", "CHR");
  }
}

module.exports = WallofVapor;
