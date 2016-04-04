"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Boneknitter extends UnimplementedCard {
  constructor(game) {
    super(game, "Boneknitter", "Onslaught", "ONS");
  }
}

module.exports = Boneknitter;
