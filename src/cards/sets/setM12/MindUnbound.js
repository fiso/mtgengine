"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindUnbound extends UnimplementedCard {
  constructor (game) {
    super(game, "Mind Unbound", "Magic 2012", "M12");
  }
}

module.exports = MindUnbound;
