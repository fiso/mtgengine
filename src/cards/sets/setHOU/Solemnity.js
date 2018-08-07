"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Solemnity extends UnimplementedCard {
  constructor (game) {
    super(game, "Solemnity", "Hour of Devastation", "HOU");
  }
}

module.exports = Solemnity;
