"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VensersJournal extends UnimplementedCard {
  constructor (game) {
    super(game, "Venser's Journal", "Scars of Mirrodin", "SOM");
  }
}

module.exports = VensersJournal;
