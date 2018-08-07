"use strict";
const Constants = require ("../../../Constants");
const FlinthoofBoarBase = require("../setEMA/FlinthoofBoar");

class FlinthoofBoar extends FlinthoofBoarBase {
  constructor (game) {
    super(game, "Flinthoof Boar", "Magic 2013", "M13");
  }
}

module.exports = FlinthoofBoar;
