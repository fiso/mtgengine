"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HomuraHumanAscendant extends UnimplementedCard {
  constructor(game) {
    super(game, "Homura, Human Ascendant", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = HomuraHumanAscendant;
