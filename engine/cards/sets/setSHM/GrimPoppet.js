"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrimPoppet extends UnimplementedCard {
  constructor(game) {
    super(game, "Grim Poppet", "Shadowmoor", "SHM");
  }
}

module.exports = GrimPoppet;
