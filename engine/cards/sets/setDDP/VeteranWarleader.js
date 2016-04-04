"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VeteranWarleaderBase = require("../setBFZ/VeteranWarleader.js");

class VeteranWarleader extends VeteranWarleaderBase {
  constructor(game) {
    super(game, "Veteran Warleader", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = VeteranWarleader;
