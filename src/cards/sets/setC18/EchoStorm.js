"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EchoStorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Echo Storm", "Commander 2018", "C18");
  }
}

module.exports = EchoStorm;
