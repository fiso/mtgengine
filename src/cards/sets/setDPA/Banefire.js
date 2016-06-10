"use strict";
const Constants = require ("../../../Constants");
const BanefireBase = require("../setCON/Banefire");

class Banefire extends BanefireBase {
  constructor (game) {
    super(game, "Banefire", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Banefire;
