"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoninWarclub extends UnimplementedCard {
  constructor(game) {
    super(game, "Ronin Warclub", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = RoninWarclub;
