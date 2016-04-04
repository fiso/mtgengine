"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JeweledBirdBase = require("../setARN/JeweledBird.js");

class JeweledBird extends JeweledBirdBase {
  constructor(game) {
    super(game, "Jeweled Bird", "Chronicles", "CHR");
  }
}

module.exports = JeweledBird;
