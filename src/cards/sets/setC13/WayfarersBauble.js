"use strict";
const Constants = require ("../../../Constants");
const WayfarersBaubleBase = require("../setCM2/WayfarersBauble");

class WayfarersBauble extends WayfarersBaubleBase {
  constructor (game) {
    super(game, "Wayfarer's Bauble", "Commander 2013", "C13");
  }
}

module.exports = WayfarersBauble;
