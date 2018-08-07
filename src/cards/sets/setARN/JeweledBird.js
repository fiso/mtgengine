"use strict";
const Constants = require ("../../../Constants");
const JeweledBirdBase = require("../setCHR/JeweledBird");

class JeweledBird extends JeweledBirdBase {
  constructor (game) {
    super(game, "Jeweled Bird", "Arabian Nights", "ARN");
  }
}

module.exports = JeweledBird;
