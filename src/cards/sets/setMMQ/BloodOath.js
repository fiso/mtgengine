"use strict";
const Constants = require ("../../../Constants");
const BloodOathBase = require("../setWC01/BloodOath");

class BloodOath extends BloodOathBase {
  constructor (game) {
    super(game, "Blood Oath", "Mercadian Masques", "MMQ");
  }
}

module.exports = BloodOath;
