"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Imagecrafter extends UnimplementedCard {
  constructor(game) {
    super(game, "Imagecrafter", "Onslaught", "ONS");
  }
}

module.exports = Imagecrafter;
