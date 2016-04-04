"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoralhelmCommander extends UnimplementedCard {
  constructor(game) {
    super(game, "Coralhelm Commander", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = CoralhelmCommander;
