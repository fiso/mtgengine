"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoldDefense extends UnimplementedCard {
  constructor(game) {
    super(game, "Bold Defense", "Zendikar", "ZEN");
  }
}

module.exports = BoldDefense;
