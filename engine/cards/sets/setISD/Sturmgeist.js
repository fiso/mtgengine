"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sturmgeist extends UnimplementedCard {
  constructor(game) {
    super(game, "Sturmgeist", "Innistrad", "ISD");
  }
}

module.exports = Sturmgeist;
