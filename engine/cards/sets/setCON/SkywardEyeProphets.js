"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkywardEyeProphetsBase = require("../setC13/SkywardEyeProphets.js");

class SkywardEyeProphets extends SkywardEyeProphetsBase {
  constructor(game) {
    super(game, "Skyward Eye Prophets", "Conflux", "CON");
  }
}

module.exports = SkywardEyeProphets;
