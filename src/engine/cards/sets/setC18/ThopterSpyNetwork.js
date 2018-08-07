"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThopterSpyNetwork extends UnimplementedCard {
  constructor (game) {
    super(game, "Thopter Spy Network", "Commander 2018", "C18");
  }
}

module.exports = ThopterSpyNetwork;
