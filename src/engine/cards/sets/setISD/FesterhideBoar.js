"use strict";
const Constants = require ("../../../Constants");
const FesterhideBoarBase = require("../setDDM/FesterhideBoar");

class FesterhideBoar extends FesterhideBoarBase {
  constructor (game) {
    super(game, "Festerhide Boar", "Innistrad", "ISD");
  }
}

module.exports = FesterhideBoar;
