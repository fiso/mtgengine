"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightmineField extends UnimplementedCard {
  constructor(game) {
    super(game, "Lightmine Field", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = LightmineField;
