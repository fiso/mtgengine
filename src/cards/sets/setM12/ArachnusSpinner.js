"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArachnusSpinner extends UnimplementedCard {
  constructor (game) {
    super(game, "Arachnus Spinner", "Magic 2012", "M12");
  }
}

module.exports = ArachnusSpinner;
