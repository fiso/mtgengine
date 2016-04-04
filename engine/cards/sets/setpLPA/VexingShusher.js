"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VexingShusher extends Card {
  constructor(game) {
    super(game, "Vexing Shusher", "Launch Parties", "pLPA");
  }
}

module.exports = VexingShusher;
