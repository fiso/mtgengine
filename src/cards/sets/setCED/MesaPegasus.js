"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MesaPegasus extends UnimplementedCard {
  constructor(game) {
    super(game, "Mesa Pegasus", "Collector's Edition", "CED");
  }
}

module.exports = MesaPegasus;
