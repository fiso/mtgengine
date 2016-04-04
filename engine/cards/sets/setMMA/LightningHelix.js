"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LightningHelixBase = require("../setDDH/LightningHelix.js");

class LightningHelix extends LightningHelixBase {
  constructor(game) {
    super(game, "Lightning Helix", "Modern Masters", "MMA");
  }
}

module.exports = LightningHelix;
