"use strict";
const Constants = require ("../../../Constants");
const TwilightShepherdBase = require("../setDVD/TwilightShepherd");

class TwilightShepherd extends TwilightShepherdBase {
  constructor (game) {
    super(game, "Twilight Shepherd", "Commander 2014", "C14");
  }
}

module.exports = TwilightShepherd;
