"use strict";
const Constants = require ("../../../Constants");
const BanefireBase = require("../setM19/Banefire");

class Banefire extends BanefireBase {
  constructor (game) {
    super(game, "Banefire", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Banefire;
