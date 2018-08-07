"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CliffThreader extends UnimplementedCard {
  constructor (game) {
    super(game, "Cliff Threader", "Zendikar", "ZEN");
  }
}

module.exports = CliffThreader;
