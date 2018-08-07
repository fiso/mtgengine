"use strict";
const Constants = require ("../../../Constants");
const TheHiveBase = require("../set10E/TheHive");

class TheHive extends TheHiveBase {
  constructor (game) {
    super(game, "The Hive", "Collectors’ Edition", "CED");
  }
}

module.exports = TheHive;
