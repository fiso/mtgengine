"use strict";
const Constants = require ("../../../Constants");
const JeweledAmuletBase = require("../setME2/JeweledAmulet");

class JeweledAmulet extends JeweledAmuletBase {
  constructor (game) {
    super(game, "Jeweled Amulet", "Ice Age", "ICE");
  }
}

module.exports = JeweledAmulet;
