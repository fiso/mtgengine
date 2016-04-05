"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Handcuffs extends UnimplementedCard {
  constructor(game) {
    super(game, "Handcuffs", "Unglued", "UGL");
  }
}

module.exports = Handcuffs;
