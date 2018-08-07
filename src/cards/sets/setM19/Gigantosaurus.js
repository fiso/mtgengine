"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gigantosaurus extends UnimplementedCard {
  constructor (game) {
    super(game, "Gigantosaurus", "Core Set 2019", "M19");
  }
}

module.exports = Gigantosaurus;
