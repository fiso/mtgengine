"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpitfireHandler extends UnimplementedCard {
  constructor(game) {
    super(game, "Spitfire Handler", "Onslaught", "ONS");
  }
}

module.exports = SpitfireHandler;
