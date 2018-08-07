"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Norritt extends UnimplementedCard {
  constructor (game) {
    super(game, "Norritt", "Ice Age", "ICE");
  }
}

module.exports = Norritt;
