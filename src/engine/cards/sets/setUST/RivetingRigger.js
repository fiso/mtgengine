"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RivetingRigger extends UnimplementedCard {
  constructor (game) {
    super(game, "Riveting Rigger", "Unstable", "UST");
  }
}

module.exports = RivetingRigger;
