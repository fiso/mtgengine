"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Whippoorwill extends UnimplementedCard {
  constructor(game) {
    super(game, "Whippoorwill", "The Dark", "DRK");
  }
}

module.exports = Whippoorwill;
