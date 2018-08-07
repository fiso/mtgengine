"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NetterenDal extends UnimplementedCard {
  constructor (game) {
    super(game, "Netter en-Dal", "Nemesis", "NEM");
  }
}

module.exports = NetterenDal;
