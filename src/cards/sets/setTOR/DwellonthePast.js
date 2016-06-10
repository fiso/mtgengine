"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwellonthePast extends UnimplementedCard {
  constructor (game) {
    super(game, "Dwell on the Past", "Torment", "TOR");
  }
}

module.exports = DwellonthePast;
