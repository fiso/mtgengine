"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DoomedDissenter extends UnimplementedCard {
  constructor (game) {
    super(game, "Doomed Dissenter", "Core Set 2019", "M19");
  }
}

module.exports = DoomedDissenter;
