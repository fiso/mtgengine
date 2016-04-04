"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MolderBeast extends Card {
  constructor(game) {
    super(game, "Molder Beast", "Scars of Mirrodin", "SOM");
  }
}

module.exports = MolderBeast;
