"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DownhillChargeBase = require("../setDDI/DownhillCharge.js");

class DownhillCharge extends DownhillChargeBase {
  constructor(game) {
    super(game, "Downhill Charge", "Nemesis", "NMS");
  }
}

module.exports = DownhillCharge;
