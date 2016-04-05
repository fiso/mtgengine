"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasterThief extends UnimplementedCard {
  constructor(game) {
    super(game, "Master Thief", "Magic 2012", "M12");
  }
}

module.exports = MasterThief;
