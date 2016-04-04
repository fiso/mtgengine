"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoninHoundmaster extends UnimplementedCard {
  constructor(game) {
    super(game, "Ronin Houndmaster", "Champions of Kamigawa", "CHK");
  }
}

module.exports = RoninHoundmaster;
