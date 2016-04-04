"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WireflyHive extends Card {
  constructor(game) {
    super(game, "Wirefly Hive", "Darksteel", "DST");
  }
}

module.exports = WireflyHive;
