"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LiftedbyClouds extends UnimplementedCard {
  constructor(game) {
    super(game, "Lifted by Clouds", "Champions of Kamigawa", "CHK");
  }
}

module.exports = LiftedbyClouds;
