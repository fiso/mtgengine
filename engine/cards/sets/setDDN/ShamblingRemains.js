"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShamblingRemainsBase = require("../setCON/ShamblingRemains.js");

class ShamblingRemains extends ShamblingRemainsBase {
  constructor(game) {
    super(game, "Shambling Remains", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = ShamblingRemains;
