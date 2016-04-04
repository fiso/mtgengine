"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WayfarersBaubleBase = require("../setC13/WayfarersBauble.js");

class WayfarersBauble extends WayfarersBaubleBase {
  constructor(game) {
    super(game, "Wayfarer's Bauble", "Commander 2014", "C14");
  }
}

module.exports = WayfarersBauble;
