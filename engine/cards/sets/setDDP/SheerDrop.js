"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SheerDropBase = require("../setBFZ/SheerDrop.js");

class SheerDrop extends SheerDropBase {
  constructor(game) {
    super(game, "Sheer Drop", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = SheerDrop;
