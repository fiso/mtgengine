"use strict";
const Constants = require ("../../../Constants");
const WayfarersBaubleBase = require("../setC13/WayfarersBauble");

class WayfarersBauble extends WayfarersBaubleBase {
  constructor(game) {
    super(game, "Wayfarer's Bauble", "Fifth Dawn", "5DN");
  }
}

module.exports = WayfarersBauble;
