"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JuniperOrderAdvocate extends UnimplementedCard {
  constructor (game) {
    super(game, "Juniper Order Advocate", "Alliances", "ALL");
  }
}

module.exports = JuniperOrderAdvocate;
