"use strict";
const Constants = require ("../../../Constants");
const SkywardEyeProphetsBase = require("../setCMA/SkywardEyeProphets");

class SkywardEyeProphets extends SkywardEyeProphetsBase {
  constructor (game) {
    super(game, "Skyward Eye Prophets", "Commander 2013", "C13");
  }
}

module.exports = SkywardEyeProphets;
