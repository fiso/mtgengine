"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CerebralEruption extends UnimplementedCard {
  constructor (game) {
    super(game, "Cerebral Eruption", "Scars of Mirrodin", "SOM");
  }
}

module.exports = CerebralEruption;
