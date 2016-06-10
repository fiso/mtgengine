"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArgothianPixies extends UnimplementedCard {
  constructor (game) {
    super(game, "Argothian Pixies", "Antiquities", "ATQ");
  }
}

module.exports = ArgothianPixies;
