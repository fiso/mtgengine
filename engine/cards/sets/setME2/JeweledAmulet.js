"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JeweledAmuletBase = require("../setICE/JeweledAmulet.js");

class JeweledAmulet extends JeweledAmuletBase {
  constructor(game) {
    super(game, "Jeweled Amulet", "Masters Edition II", "ME2");
  }
}

module.exports = JeweledAmulet;
