"use strict";
const Constants = require ("../../../Constants");
const SkywardEyeProphetsBase = require("../setCMA/SkywardEyeProphets");

class SkywardEyeProphets extends SkywardEyeProphetsBase {
  constructor (game) {
    super(game, "Skyward Eye Prophets", "Conflux", "CON");
  }
}

module.exports = SkywardEyeProphets;
