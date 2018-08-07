"use strict";
const Constants = require ("../../../Constants");
const EyesintheSkiesBase = require("../setMM3/EyesintheSkies");

class EyesintheSkies extends EyesintheSkiesBase {
  constructor (game) {
    super(game, "Eyes in the Skies", "Return to Ravnica", "RTR");
  }
}

module.exports = EyesintheSkies;
