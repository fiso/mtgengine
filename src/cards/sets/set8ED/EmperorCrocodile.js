"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmperorCrocodile extends UnimplementedCard {
  constructor (game) {
    super(game, "Emperor Crocodile", "Eighth Edition", "8ED");
  }
}

module.exports = EmperorCrocodile;
