"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MesaPegasus extends UnimplementedCard {
  constructor (game) {
    super(game, "Mesa Pegasus", "Masters Edition", "MED");
  }
}

module.exports = MesaPegasus;
