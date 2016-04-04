"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArgothianPixies extends Card {
  constructor(game) {
    super(game, "Argothian Pixies", "Antiquities", "ATQ");
  }
}

module.exports = ArgothianPixies;
