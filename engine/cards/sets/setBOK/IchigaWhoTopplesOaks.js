"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IchigaWhoTopplesOaks extends UnimplementedCard {
  constructor(game) {
    super(game, "Ichiga, Who Topples Oaks", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = IchigaWhoTopplesOaks;
