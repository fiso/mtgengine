"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TheHiveBase = require("../set6ED/TheHive.js");

class TheHive extends TheHiveBase {
  constructor(game) {
    super(game, "The Hive", "Revised Edition", "3ED");
  }
}

module.exports = TheHive;
