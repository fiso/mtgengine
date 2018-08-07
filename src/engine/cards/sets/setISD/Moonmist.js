"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Moonmist extends UnimplementedCard {
  constructor (game) {
    super(game, "Moonmist", "Innistrad", "ISD");
  }
}

module.exports = Moonmist;
