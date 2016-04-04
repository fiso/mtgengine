"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ControloftheCourt extends Card {
  constructor(game) {
    super(game, "Control of the Court", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ControloftheCourt;
