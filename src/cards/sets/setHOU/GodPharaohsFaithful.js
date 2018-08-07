"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GodPharaohsFaithful extends UnimplementedCard {
  constructor (game) {
    super(game, "God-Pharaoh's Faithful", "Hour of Devastation", "HOU");
  }
}

module.exports = GodPharaohsFaithful;
