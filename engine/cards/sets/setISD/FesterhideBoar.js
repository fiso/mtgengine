"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FesterhideBoarBase = require("../setDDM/FesterhideBoar.js");

class FesterhideBoar extends FesterhideBoarBase {
  constructor(game) {
    super(game, "Festerhide Boar", "Innistrad", "ISD");
  }
}

module.exports = FesterhideBoar;
