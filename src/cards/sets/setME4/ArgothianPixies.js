"use strict";
const Constants = require ("../../../Constants");
const ArgothianPixiesBase = require("../setATQ/ArgothianPixies");

class ArgothianPixies extends ArgothianPixiesBase {
  constructor (game) {
    super(game, "Argothian Pixies", "Masters Edition IV", "ME4");
  }
}

module.exports = ArgothianPixies;
