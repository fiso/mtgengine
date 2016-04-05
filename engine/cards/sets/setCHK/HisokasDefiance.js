"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HisokasDefiance extends UnimplementedCard {
  constructor(game) {
    super(game, "Hisoka's Defiance", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HisokasDefiance;
