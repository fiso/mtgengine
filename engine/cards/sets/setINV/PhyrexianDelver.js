"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexianDelverBase = require("../setC13/PhyrexianDelver.js");

class PhyrexianDelver extends PhyrexianDelverBase {
  constructor(game) {
    super(game, "Phyrexian Delver", "Invasion", "INV");
  }
}

module.exports = PhyrexianDelver;
