"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DungroveElder extends UnimplementedCard {
  constructor (game) {
    super(game, "Dungrove Elder", "Magic 2012", "M12");
  }
}

module.exports = DungroveElder;
