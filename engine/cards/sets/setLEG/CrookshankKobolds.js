"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrookshankKobolds extends Card {
  constructor(game) {
    super(game, "Crookshank Kobolds", "Legends", "LEG");
  }
}

module.exports = CrookshankKobolds;
