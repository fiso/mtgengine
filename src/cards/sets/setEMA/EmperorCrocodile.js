"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmperorCrocodile extends UnimplementedCard {
  constructor (game) {
    super(game, "Emperor Crocodile", "Eternal Masters", "EMA");
  }
}

module.exports = EmperorCrocodile;
