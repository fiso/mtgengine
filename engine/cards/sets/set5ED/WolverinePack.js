"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WolverinePack extends UnimplementedCard {
  constructor(game) {
    super(game, "Wolverine Pack", "Fifth Edition", "5ED");
  }
}

module.exports = WolverinePack;
