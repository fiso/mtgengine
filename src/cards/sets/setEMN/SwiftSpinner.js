"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwiftSpinner extends UnimplementedCard {
  constructor (game) {
    super(game, "Swift Spinner", "Eldritch Moon", "EMN");
  }
}

module.exports = SwiftSpinner;
