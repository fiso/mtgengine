"use strict";
const Constants = require ("../../../Constants");
const WindbornMuseBase = require("../setLGN/WindbornMuse");

class WindbornMuse extends WindbornMuseBase {
  constructor(game) {
    super(game, "Windborn Muse", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = WindbornMuse;
