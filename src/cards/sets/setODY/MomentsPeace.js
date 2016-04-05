"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MomentsPeace extends UnimplementedCard {
  constructor(game) {
    super(game, "Moment's Peace", "Odyssey", "ODY");
  }
}

module.exports = MomentsPeace;
