"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Gnathosaur extends Card {
  constructor(game) {
    super(game, "Gnathosaur", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Gnathosaur;
