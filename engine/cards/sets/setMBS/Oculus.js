"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Oculus extends Card {
  constructor(game) {
    super(game, "Oculus", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Oculus;
