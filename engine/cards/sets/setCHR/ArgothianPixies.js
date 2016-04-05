"use strict";
const Constants = require ("../../../Constants");
const ArgothianPixiesBase = require("../setATQ/ArgothianPixies");

class ArgothianPixies extends ArgothianPixiesBase {
  constructor(game) {
    super(game, "Argothian Pixies", "Chronicles", "CHR");
  }
}

module.exports = ArgothianPixies;
