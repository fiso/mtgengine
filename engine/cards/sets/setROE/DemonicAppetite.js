"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DemonicAppetite extends Card {
  constructor(game) {
    super(game, "Demonic Appetite", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = DemonicAppetite;
