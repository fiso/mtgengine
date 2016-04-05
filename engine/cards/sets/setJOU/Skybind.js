"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Skybind extends UnimplementedCard {
  constructor(game) {
    super(game, "Skybind", "Journey into Nyx", "JOU");
  }
}

module.exports = Skybind;
