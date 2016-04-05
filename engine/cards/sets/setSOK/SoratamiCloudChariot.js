"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoratamiCloudChariot extends UnimplementedCard {
  constructor(game) {
    super(game, "Soratami Cloud Chariot", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = SoratamiCloudChariot;
