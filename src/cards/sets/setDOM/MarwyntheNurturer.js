"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarwyntheNurturer extends UnimplementedCard {
  constructor (game) {
    super(game, "Marwyn, the Nurturer", "Dominaria", "DOM");
  }
}

module.exports = MarwyntheNurturer;
