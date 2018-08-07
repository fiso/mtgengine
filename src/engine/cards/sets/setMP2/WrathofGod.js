"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WrathofGod extends UnimplementedCard {
  constructor (game) {
    super(game, "Wrath of God", "Amonkhet Invocations", "MP2");
  }
}

module.exports = WrathofGod;
