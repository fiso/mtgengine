"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MycoidShepherd extends UnimplementedCard {
  constructor(game) {
    super(game, "Mycoid Shepherd", "Alara Reborn", "ARB");
  }
}

module.exports = MycoidShepherd;
