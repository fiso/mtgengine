"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArgothianElder extends UnimplementedCard {
  constructor(game) {
    super(game, "Argothian Elder", "Battle Royale Box Set", "BRB");
  }
}

module.exports = ArgothianElder;
