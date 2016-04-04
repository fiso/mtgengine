"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KeeningStone extends Card {
  constructor(game) {
    super(game, "Keening Stone", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = KeeningStone;
