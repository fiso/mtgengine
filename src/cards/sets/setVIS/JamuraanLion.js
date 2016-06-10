"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JamuraanLion extends UnimplementedCard {
  constructor (game) {
    super(game, "Jamuraan Lion", "Visions", "VIS");
  }
}

module.exports = JamuraanLion;
