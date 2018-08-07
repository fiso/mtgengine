"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MakeaStand extends UnimplementedCard {
  constructor (game) {
    super(game, "Make a Stand", "Core Set 2019", "M19");
  }
}

module.exports = MakeaStand;
