"use strict";
const Constants = require ("../../../Constants");
const TheHiveBase = require("../set6ED/TheHive");

class TheHive extends TheHiveBase {
  constructor (game) {
    super(game, "The Hive", "Tenth Edition", "10E");
  }
}

module.exports = TheHive;
