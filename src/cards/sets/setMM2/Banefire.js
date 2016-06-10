"use strict";
const Constants = require ("../../../Constants");
const BanefireBase = require("../setCON/Banefire");

class Banefire extends BanefireBase {
  constructor (game) {
    super(game, "Banefire", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Banefire;
