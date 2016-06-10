"use strict";
const Constants = require ("../../../Constants");
const JeweledBirdBase = require("../setARN/JeweledBird");

class JeweledBird extends JeweledBirdBase {
  constructor (game) {
    super(game, "Jeweled Bird", "Chronicles", "CHR");
  }
}

module.exports = JeweledBird;
