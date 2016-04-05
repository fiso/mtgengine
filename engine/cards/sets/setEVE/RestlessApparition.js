"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RestlessApparition extends UnimplementedCard {
  constructor(game) {
    super(game, "Restless Apparition", "Eventide", "EVE");
  }
}

module.exports = RestlessApparition;
