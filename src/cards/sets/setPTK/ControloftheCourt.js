"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ControloftheCourt extends UnimplementedCard {
  constructor (game) {
    super(game, "Control of the Court", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ControloftheCourt;
