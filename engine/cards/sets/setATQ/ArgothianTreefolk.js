"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArgothianTreefolk extends UnimplementedCard {
  constructor(game) {
    super(game, "Argothian Treefolk", "Antiquities", "ATQ");
  }
}

module.exports = ArgothianTreefolk;
