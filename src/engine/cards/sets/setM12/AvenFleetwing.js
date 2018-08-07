"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenFleetwing extends UnimplementedCard {
  constructor (game) {
    super(game, "Aven Fleetwing", "Magic 2012", "M12");
  }
}

module.exports = AvenFleetwing;
