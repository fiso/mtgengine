"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LullmageMentor extends UnimplementedCard {
  constructor(game) {
    super(game, "Lullmage Mentor", "Zendikar", "ZEN");
  }
}

module.exports = LullmageMentor;
