"use strict";
const Constants = require ("../../../Constants");
const JeweledAmuletBase = require("../setICE/JeweledAmulet");

class JeweledAmulet extends JeweledAmuletBase {
  constructor(game) {
    super(game, "Jeweled Amulet", "Masters Edition II", "ME2");
  }
}

module.exports = JeweledAmulet;
