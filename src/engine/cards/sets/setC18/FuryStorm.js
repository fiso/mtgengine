"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FuryStorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Fury Storm", "Commander 2018", "C18");
  }
}

module.exports = FuryStorm;
