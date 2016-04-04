"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WildNacatlBase = require("../setDDH/WildNacatl.js");

class WildNacatl extends WildNacatlBase {
  constructor(game) {
    super(game, "Wild Nacatl", "Shards of Alara", "ALA");
  }
}

module.exports = WildNacatl;
