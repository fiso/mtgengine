"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrumblingColossus extends UnimplementedCard {
  constructor (game) {
    super(game, "Crumbling Colossus", "Magic 2012", "M12");
  }
}

module.exports = CrumblingColossus;
