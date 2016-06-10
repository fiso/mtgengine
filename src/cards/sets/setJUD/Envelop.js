"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Envelop extends UnimplementedCard {
  constructor (game) {
    super(game, "Envelop", "Judgment", "JUD");
  }
}

module.exports = Envelop;
