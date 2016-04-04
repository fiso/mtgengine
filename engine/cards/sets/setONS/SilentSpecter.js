"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilentSpecter extends UnimplementedCard {
  constructor(game) {
    super(game, "Silent Specter", "Onslaught", "ONS");
  }
}

module.exports = SilentSpecter;
