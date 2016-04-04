"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArgothianPixiesBase = require("../setATQ/ArgothianPixies.js");

class ArgothianPixies extends ArgothianPixiesBase {
  constructor(game) {
    super(game, "Argothian Pixies", "Chronicles", "CHR");
  }
}

module.exports = ArgothianPixies;
