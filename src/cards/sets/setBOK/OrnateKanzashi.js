"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrnateKanzashi extends UnimplementedCard {
  constructor(game) {
    super(game, "Ornate Kanzashi", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = OrnateKanzashi;
