"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrownofFury extends UnimplementedCard {
  constructor (game) {
    super(game, "Crown of Fury", "Onslaught", "ONS");
  }
}

module.exports = CrownofFury;
