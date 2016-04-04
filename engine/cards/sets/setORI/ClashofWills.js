"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ClashofWills extends Card {
  constructor(game) {
    super(game, "Clash of Wills", "Magic Origins", "ORI");
  }
}

module.exports = ClashofWills;
