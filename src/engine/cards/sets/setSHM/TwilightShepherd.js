"use strict";
const Constants = require ("../../../Constants");
const TwilightShepherdBase = require("../setDVD/TwilightShepherd");

class TwilightShepherd extends TwilightShepherdBase {
  constructor (game) {
    super(game, "Twilight Shepherd", "Shadowmoor", "SHM");
  }
}

module.exports = TwilightShepherd;
