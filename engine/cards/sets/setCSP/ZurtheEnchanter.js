"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZurtheEnchanter extends Card {
  constructor(game) {
    super(game, "Zur the Enchanter", "Coldsnap", "CSP");
  }
}

module.exports = ZurtheEnchanter;
