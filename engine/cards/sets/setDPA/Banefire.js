"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BanefireBase = require("../setCON/Banefire.js");

class Banefire extends BanefireBase {
  constructor(game) {
    super(game, "Banefire", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Banefire;
