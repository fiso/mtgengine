"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoltaicServant extends UnimplementedCard {
  constructor (game) {
    super(game, "Voltaic Servant", "Dominaria", "DOM");
  }
}

module.exports = VoltaicServant;
